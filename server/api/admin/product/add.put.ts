import z from "zod";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const singleSchema = z.object({
  name: z.coerce.string(),
  price: z.coerce.number(),
  category: z.string(),
  desc: z.coerce.string(),
});
const schema = z.array(singleSchema);

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

    const products = await prisma.product.createManyAndReturn({
      data: body.data,
      omit:{
        imageAlt: true
      }
    });

    return { statusCode: 201, data: products };
  } catch (error: any) {
    return createError(error.message);
  }
});
