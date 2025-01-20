import { PrismaClient } from "@prisma/client"
import z from 'zod'

const schema = z.object({
    productId: z.coerce.number().int()
})

export default defineEventHandler(async event => {
    try {
        const body = await readValidatedBody(event, schema.safeParse)
        const prisma = new PrismaClient()
        if (body.error) {
            return createError({
                statusCode: 400,
                statusMessage: 'invalid data',
                message: 'Invalid product ID'
            })
        }
        await prisma.product.delete({
            where: {
                id: body.data.productId
            }
        })
        return {statusCode: 200}
    } catch (error: any) {
        return createError(error.message)
    }
})