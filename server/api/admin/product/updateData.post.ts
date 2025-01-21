import z from "zod";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const schema = z.object({
  id: z.number().int(),
  name: z.coerce.string(),
  price: z.coerce.number(),
  category: z.string(),
  desc: z.coerce.string(),
  available: z.boolean(),
});

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const config = useRuntimeConfig();
  try {
    const body = await readValidatedBody(event, schema.safeParse);

    if (body.error) {
      return createError({
        statusCode: 400,
        statusMessage: "Invalid Data",
        message: "Invalid data, check form and try again",
      });
    }

    const product = await prisma.product.update({
      where: {
        id: body.data.id,
      },
      data: body.data,

      omit: {
        imageAlt: true,
      },
    });

    return { statusCode: 200, data: product };
  } catch (error: any) {
    return createError(error.message);
  }
});
