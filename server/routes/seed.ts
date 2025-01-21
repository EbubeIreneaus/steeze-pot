import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  
    
    try{
       
    return { status: "completed" };
  } catch (error: any) {
    return { error: error?.message };
  }
});
