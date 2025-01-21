import prisma from "~/lib/prisma"

export default defineCachedEventHandler(async (event) => {
  try {
    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    }) 
    return {categories}
  } catch (error) {
    
  }
})