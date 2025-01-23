import prisma from "~/lib/prisma";
import z from "zod";
import jwt, { JwtPayload } from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const token = getHeader(event, 'Authorization')?.split(' ')[1] as string
  try {
    const user = jwt.verify(token, config.jwt_secret) as JwtPayload as {user: {id: number}}
    const products = await prisma.favorite.findMany({
      where: {
        userId: user.user.id,
      },
      select: {
        productId: true
      }
    });
    const arr = products.map(pr => pr.productId)
    return { statusCode: 200, products: arr};
  } catch (error: any) {
    return createError(error.message);
  }
});
