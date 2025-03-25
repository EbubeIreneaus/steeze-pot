import prisma from "~/lib/prisma";

export default defineEventHandler(async event => {
  try {
    const query =  getQuery(event) as {userId:string, display: string}


    const searchQuery: any = {
        userId: parseInt(query.userId)
    }

    switch (query.display) {
        case 'paid':
            searchQuery.paid = true;
            break;
        case 'unpaid':
            searchQuery.paid = false;
            break;
        case 'delivered':
            searchQuery.delivered = true;
            break;
        case 'undelivered':
            searchQuery.delivered = false;
            break;
        default:
            break;
    }

    const orders = await prisma.order.findMany({
        where: searchQuery,
        select: {
            id: true,
            totalAmount: true,
            paid: true,
            delivered: true,
            createdAt: true
        }
    })
    return orders
  } catch (error: any) {
    return createError(error.message)
  }
});
