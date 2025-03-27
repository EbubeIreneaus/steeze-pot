import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id") as string;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        phone: true,
        createdAt: true,
        admin: true,
        _count: {
          select: { order: true }
        }
      }
    });
    return user
  } catch (error: any) {
    return createError({statusCode: 500, statusMessage: error.message})
  }
});
