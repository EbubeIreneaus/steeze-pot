import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const ap = await prisma.appointment.findMany()
        return ap
    } catch (error: any) {
        return createError({statusCode: 500, statusMessage: error.message})
    }
})