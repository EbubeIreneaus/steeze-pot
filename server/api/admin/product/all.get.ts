import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const products = await prisma.product.findMany()

        return {statusCode: 200, data: products}

    } catch (error: any) {
        return createError(error.message)
    }
})