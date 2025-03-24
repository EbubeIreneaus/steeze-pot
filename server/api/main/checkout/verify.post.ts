import { flw } from "~/lib/flw";
import z from "zod";
import prisma from "~/lib/prisma";

const schema = z.object({
  transaction_id: z.string().min(1),
  status: z.string().min(1),
  tx_ref: z.coerce.number().min(1),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readValidatedBody(event, schema.safeParse);
    const config = useRuntimeConfig();

    if (body.error) {
      return createError({
        statusCode: 400,
        statusMessage: body.error.errors[0].message,
      });
    }

    const { transaction_id, status, tx_ref } = body.data;

    const order = await prisma.order.findFirst({
      where: {
        id: tx_ref,
      },
    });
    if (!order) {
      return createError({
        statusCode: 404,
        statusMessage: "order not found",
      });
    }

    const res = await $fetch<any>(
      `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
      {
        headers: {
          Authorization: `Bearer ${config.flw_secret}`,
          "Content-Type": "application/json",
        },
      }
    );
    
    if (
      res.data.status === "successful" &&
      res.data.amount >= order.totalAmount &&
      res.data.tx_ref == order.id &&
      res.data.currency === "NGN"
    ) {
      await prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          paid: true,
        },
      });
    } else {
      return createError({
        statusCode: 400,
        statusMessage: "payment was unsuccessful",
      });
    }

    return { statusCode: 200 };
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
});
