import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import z from "zod";
import jwt from "jsonwebtoken";


const schema = z.object({
  email: z.string().email(),
  password: z.coerce.string().min(6),
});
export default defineEventHandler(async (event) => {
  try {
    const prisma = new PrismaClient();
    const body = await readValidatedBody(event, schema.safeParse);
    const config = useRuntimeConfig();

    if (body.error) {
      return createError({
        statusCode: 400,
        statusMessage: "Invalid data",
        message: body.error.issues[0].message,
      });
    }
    const { email, password } = body.data;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        admin: true,
      },
      select: {
        id: true,
        psw: true,
      },
    });

    if (!user) {
      return createError({
        statusCode: 404,
        statusMessage: "admin not found",
        message: "admin user not found",
      });
    }

    const isValidPsw = bcrypt.compareSync(password, user.psw);

    if (!isValidPsw) {
      return createError({
        statusCode: 400,
        statusMessage: "details mismatch",
        message: "check admin details and try again",
      });
    }

    const token = jwt.sign(
        {
            userId: user.id,
            admin: true,
        },
        config.jwt_secret,
        { expiresIn: '24h' }
    );

    return {statusCode: 200, statusMessage: 'success', token}

  } catch (error: any) {
    return createError({statusCode: 500, statusMessage: 'Internal Server Error', message: error.message})
  }
});
