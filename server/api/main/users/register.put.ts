
import z from "zod";
import jwt from "jsonwebtoken";
import prisma from "~/lib/prisma";
import bcrypt from "bcryptjs";

const schema = z.object({
  firstname: z.coerce.string().min(1, {message:'firstname must contain at least 1 character'}).toLowerCase(),
  lastname: z.coerce.string().min(1, {message:'lastname must contain at least 1 character'}).toLowerCase(),
  email: z.string().min(1, {message: 'email field must not be empty'}).email({message: "invalid email address"}),
  phone: z.coerce.string().min(10).max(13),
  psw: z.coerce
    .string()
    .min(6, {message: "password must be more than sx characters long"}),
});
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const body = await readValidatedBody(event, schema.safeParse);
    if (body.error) {
      return {
        statusCode: 400,
        statusMessage: body.error.issues[0].message,
        message: body.error.issues[0].message,
      };
    }
    const salt = bcrypt.genSaltSync();
    const hashedPsw = bcrypt.hashSync(body.data.psw, salt);
    const user = await prisma.user.create({
      data: {
        ...body.data,
        psw: hashedPsw
      },
      omit: {
        psw: true,
        createdAt: true,
      },
    });

    try {
      const token = jwt.sign({ user }, config.jwt_secret);
      return { statusCode: 201, token };
    } catch (error) {
      return { statusCode: 201, token: null };
    }
  } catch (error: any) {
    return createError(error.message);
  }
});
