
import prisma from "~/lib/prisma";
import z from "zod";
import jwt from "jsonwebtoken";

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
        const user = jwt.verify(token, config.jwt_secret) as  {user: {id: number}};
        const product = body.data.productId

        await prisma.favorite.delete({
          where: {
            productId: product
          }
        })
        return {statusCode: 200}
    } catch (error) {
        return createError('unknown error occured')
    }
    
});
