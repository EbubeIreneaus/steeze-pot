-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "bustop" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);
