import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  try {
    const body = (await readMultipartFormData(event)) as [];
    const upload_dir = path.join(process.cwd(), "public", "img", "products");
    let imageName = new Date().getTime() as unknown as string;
    const prisma = new PrismaClient();
    let productId;
    let image;
    let alt;

    if (!fs.existsSync(upload_dir)) {
      fs.mkdirSync(upload_dir, { recursive: true });
    }

    for (const field of body) {
      const { name, data, type, filename }: any = field;
      if (name == "file") {
        if (!type.startsWith("image")) {
          return createError({
            statusCode: 400,
            message: "image format not supported",
          });
        }
        imageName += "-" + filename + "." + type.split("/")[1];

        fs.writeFileSync(path.join(upload_dir, imageName), data);
        image = imageName;
        continue;
      }

      if (name == "productId") {
        if (data && Buffer.isBuffer(data)) {
          productId = data.toString("utf-8");
        } else {
          productId = data;
        }
        continue;
      }

      if (name == "alt") {
        if (data && Buffer.isBuffer(data)) {
           alt = data.toString("utf-8");
        } else {
          alt = data;
        }
      }
    }

    const res = await prisma.product.update({
      where: {
        id: parseInt(productId as string),
      },
      data: {
        image: image,
        imageAlt: alt
      },
    });

    return {statusCode: 201, data: res}
  } catch (error: any) {
    return createError(error.message)
  }
});
