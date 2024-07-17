/*
  Warnings:

  - You are about to drop the column `content` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Testimonial` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "content",
DROP COLUMN "image",
DROP COLUMN "rating",
ADD COLUMN     "desc" TEXT,
ADD COLUMN     "img" TEXT,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "contactMethod" TEXT,
    "inquiryType" TEXT,
    "message" TEXT,
    "contactTime" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
