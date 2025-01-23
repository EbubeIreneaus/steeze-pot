import prisma from "~/lib/prisma";
import z from "zod";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const userId = getQuery(event).userId as string
    console.log(userId)
  try {
 

    const products = await prisma.favorite.findMany({
      where: {
        userId: parseInt(userId),
      },
      select: {
        product: true
      }
    });
    const arr = products.map(pr => pr.product)
    return { statusCode: 200, products: arr };
  } catch (error: any) {
    return createError(error.message);
  }
});
