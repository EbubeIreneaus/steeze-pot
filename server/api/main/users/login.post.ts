import z from "zod";
import jwt from "jsonwebtoken";
import prisma from "~/lib/prisma";
import bcrypt from "bcryptjs";

const schema = z.object({
  email: z.string().min(1, 'String must contain at least 1').email("invalid email address"),
  psw: z.coerce
    .string()
    .min(6, "password must be more than sx characters long"),
});
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const body = await readValidatedBody(event, schema.safeParse);
    if (body.error) {
      return {
        statusCode: 400,
        message: body.error.issues[0].message,
      };
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.data.email,
      },
      omit: {
        createdAt: true,
      },
    });

    if (!user) {
      return createError({
        statusCode: 404,
        statusMessage: "user not found",
        message: "no matching record",
      });
    }
    const isValidPsw = bcrypt.compareSync(body.data.psw, user.psw);
    if (!isValidPsw) {
      return createError({
        statusCode: 400,
        statusMessage: "user not found",
        message: "no matching record",
      });
    }
    try {
      const token = jwt.sign(
        { user: { ...user, psw: null } },
        config.jwt_secret
      );
      return { statusCode: 200, token };
    } catch (error) {
      return { statusCode: 200, token: null };
    }
  } catch (error: any) {
    return createError(error.message);
  }
});
