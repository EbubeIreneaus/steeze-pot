
import prisma from "~/lib/prisma";
import z from "zod";
import jwt, { JwtPayload } from "jsonwebtoken";

const schema = z.object({
  productId: z.coerce.number().int(),
});
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
    const body = await readValidatedBody(event, schema.safeParse);
    const token = getHeader(event, 'Authorization')?.split(' ')[1] as string;
    if (body.error) {
      return {
        statusCode: 400,
        message: body.error.issues[0].message,
      };
    }

    try {
        const user = jwt.verify(token, config.jwt_secret) as JwtPayload as {user: {id: number}};
        console.log(user)
        const product = body.data.productId

        await prisma.favorite.create({
          data: {
            userId: user.user.id,
            productId: product
          }
        })
        return {statusCode: 201}
    } catch (error:any) {
        return createError(error.message)
    }
    
});
