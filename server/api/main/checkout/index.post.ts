import { create } from "domain";
import jwt from "jsonwebtoken";
import z from "zod";
import prisma from "~/lib/prisma";

const productSchema = z.array(
  z.object({
    product_id: z.coerce.number().min(1).int(),
    quantity: z.coerce.number().min(1).int(),
  })
);

const addressScema = z
  .object({
    state: z.string().min(1, { message: "please choose a valid state" }),
    area: z
      .string()
      .min(1, { message: "please choose a valid Local Goverment Area" }),
    bustop: z
      .string()
      .min(1, { message: "please fill in a bustop or juction in your area " }),
    street: z.string().min(1, { message: "street must contain a value" }),
    address: z.string().min(1, { message: "address mus contain a value" }),
  })
  .optional();

const schema = z.object({
  addressType: z.string().min(1),
  order: productSchema,
  address: addressScema,
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readValidatedBody(event, schema.safeParse);
    const token = getHeader(event, "Authorization")?.split(" ")[1] as string;
    const config = useRuntimeConfig();
    let newAddressId: number | null = null;
    let payLink: string = '';

    if (!token) {
      return createError({
        statusCode: 401,
        statusMessage: "please login to continue",
      });
    }

    const user = jwt.verify(token, config.jwt_secret) as {
      user: {
        id: number;
        email: string;
        firstname: string;
        lastname: string;
        phone: string;
      };
    };

    if (body.error) {
      return createError({
        statusCode: 400,
        statusMessage: body.error.errors[0].message,
      });
    }

    const { order, addressType } = body.data;

    await prisma.$transaction(async (prisma) => {
      if (addressType === "new") {
        // create new address and return addressId
        const address = await prisma.address.create({
          data: {
            ...(body.data.address as any),
            userId: user.user.id,
          },
        });
        newAddressId = address.id;
      }

      const productIds = order.map((order) => order.product_id);

      const products = await prisma.product.findMany({
        where: {
          id: {
            in: productIds,
          },
        },
        select: {
          name: true,
          id: true,
          price: true,
        },
      });

      const Orders = order.map((order) => {
        const product = products.find((pr) => pr.id == order.product_id);
        return { ...product, quantity: order.quantity };
      });

      const totalPrice = Orders.reduce(
        (x, y) => parseInt(y.price?.toString() || "0") + x,
        0
      );

      const ORDER = await prisma.order.create({
        data: {
          totalAmount: totalPrice,
          addressId: newAddressId as number,
          products: Orders,
          userId: user.user.id,
        },
      });

      // initialize flutterwave here
      let flw_body = {
        tx_ref: ORDER.id,
        amount: ORDER.totalAmount,
        currency: "NGN",
        customer: {
          email: user.user.email,
          name: user.user.firstname + " " + user.user.lastname,
          phonenumber: user.user.phone,
        },
        redirect_url: "http://localhost:3000/checkout/success",
        customizations: {
          title: "Steeze Pot",
        },
      };

      const res = await (
        await fetch("https://api.flutterwave.com/v3/payments", {
          method: "POST",
          body: JSON.stringify(flw_body),
          headers: {
            Authorization: `Bearer ${config.flw_secret}`,
            "Content-Type": "application/json",
          },
        })
      ).json();

      if (res.status == "success") {
        payLink = res.data.link as string
      }
      return createError({ statusCode: 500, statusMessage: res.message });
    });
   
    return { statusCode: 201, payLink: payLink };

  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
});
