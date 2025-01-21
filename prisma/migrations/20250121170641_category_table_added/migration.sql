-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "category" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("name") ON DELETE SET NULL ON UPDATE CASCADE;
