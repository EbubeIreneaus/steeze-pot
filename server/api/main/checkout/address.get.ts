import prisma from "~/lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const token = getHeader(event, "Authorization")?.split(" ")[1] as string;
    const user = jwt.verify(token, config.jwt_secret) as JwtPayload as {
      id: number;
    };
    const addresses = await prisma.address.findFirst({
      where: {
        userId: user.id,
      },
    });

    return { statusCode: 200, addresses };
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
});
