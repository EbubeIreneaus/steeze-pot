import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const user = await prisma.user.findMany({
            where: {
               id: {
                not: event.context.user.userId
               }
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
        })

        const me = await prisma.user.findUnique({
            where: {
                id: event.context.user.userId 
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
                  select: { order: {where: {paid: true}} }
                }
              }
        })
        return {statusCode: 200, data: user, me: me}
    } catch (error:any) {
        return createError(error.message)
    }
})