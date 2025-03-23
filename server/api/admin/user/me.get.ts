import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const me = await prisma.user.findUnique({
            where: {
                id: event.context.user.userId 
            },

            omit: {
                psw: true
            }
        })
        return {statusCode: 200, data: me}
    } catch (error:any) {
        return createError(error.message)
    }
})