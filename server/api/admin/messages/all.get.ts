import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const msg = await prisma.message.findMany()
        return msg
    } catch (error: any) {
        return createError(error.messsage)
    }
})