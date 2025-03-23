import fs from "fs";
import path from "path";
import prisma from "~/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { promisify } from "util";
import streamifier from "streamifier";

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()

    cloudinary.config({
      cloud_name: config.cloudinary_name,
      api_key: config.cloudinary_key,
      api_secret: config.cloudinary_secret,
    });
    const uploadStream = promisify(cloudinary.uploader.upload_stream).bind(
      cloudinary.uploader
    );

    const body = (await readMultipartFormData(event)) as [];
    const upload_dir = path.join(process.cwd(), "public", "img", "products");
    let imageName = new Date().getTime() as unknown as string;
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
        // imageName += "-" + filename + "." + type.split("/")[1];
        // fs.writeFileSync(path.join(upload_dir, imageName), data);

        const result = await new Promise<any>((resolve, reject) => {
          const upload = cloudinary.uploader.upload_stream(
            { folder: "steeze-pot", resource_type: "image" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          streamifier.createReadStream(data).pipe(upload);
        });
       
        image = result.secure_url;
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
        imageAlt: alt,
      },
    });

    return {
      statusCode: 201,
      data: { productId: res.id, filename: res.image },
    };
  } catch (error: any) {
    return createError(error.message);
  }
});
