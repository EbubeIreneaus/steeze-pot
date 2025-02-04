import z from "zod";
import prisma from "~/lib/prisma";

const schema = z.object({
  type: z.coerce.string().min(1),
  fullname: z.string().min(1),
  email: z.string().email(),
  date: z.coerce.string().min(1),
  time: z.coerce.string().min(1),
  phone: z.coerce.string().min(11),
  state: z.string().min(1),
  bustop: z.string().min(1),
  area: z.string().min(1),
  address: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  try {
    const body = readValidatedBody(event, schema.safeParse);
    const { error, data } = await body;

    if (error) {
      throw createError({
        status: 400,
        statusMessage: error.issues[0].message,
        data: error.issues[0].message,
      });
    }

    const req = await prisma.appointment.create({
      data: data,
    });

    // send aknowledement mail to user who booked the appointment

    return { statusCode: 201 };
  } catch (error) {
    throw error;
  }
});
