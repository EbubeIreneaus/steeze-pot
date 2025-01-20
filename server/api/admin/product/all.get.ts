import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async event => {
    const prisma = new PrismaClient()
    try {
        const products = await prisma.product.findMany()

        return {statusCode: 200, data: products}

    } catch (error: any) {
        return createError(error.message)
    }
})