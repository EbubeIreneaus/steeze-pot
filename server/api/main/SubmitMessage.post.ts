import z from "zod";
import prisma from "~/lib/prisma";

const schema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Email must be a valid email" }),
  message: z.coerce
    .string()
    .min(1, { message: "Message must contain a value" }),
});
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.safeParse);

  if (body.error) {
    return createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message,
    });
  }

  try {
    await prisma.message.create({
      data: body.data,
    });
    return {statusCode: 201}
  } catch (error: any) {
    return createError({statusCode: 500, statusMessage: error.message})
  }
});
