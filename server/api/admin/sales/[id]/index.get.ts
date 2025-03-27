import prisma from "~/lib/prisma"

export default defineCachedEventHandler(async event => {
    try {
        const id = getRouterParam(event, 'id') as string

        const order = await prisma.order.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                deliveryAddress: true
            }
        })

        return order
    } catch (error: any) {
        return createError(error.message)
    }
})