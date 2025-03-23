import prisma from "~/lib/prisma"

export default defineCachedEventHandler(async (event) => {
    try {
        const orders = await prisma.order.findMany({
            where: {
                delivered: false
            },

            include:{
                user: {
                    omit: {
                        psw: true
                    }
                }
            }
        })

        return {statusCode: 200, data: orders}
    } catch (error: any) {
        return createError(error.message)
    }
}, {
    maxAge: 60
})