/*
  Warnings:

  - You are about to drop the column `locationId` on the `Screening` table. All the data in the column will be lost.
  - Added the required column `date` to the `Screening` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Screening.movieId_locationId_unique";

-- CreateTable
CREATE TABLE "_LocationToScreening" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Location" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Screening" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Screening" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Screening" ("id", "movieId") SELECT "id", "movieId" FROM "Screening";
DROP TABLE "Screening";
ALTER TABLE "new_Screening" RENAME TO "Screening";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToScreening_AB_unique" ON "_LocationToScreening"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToScreening_B_index" ON "_LocationToScreening"("B");
