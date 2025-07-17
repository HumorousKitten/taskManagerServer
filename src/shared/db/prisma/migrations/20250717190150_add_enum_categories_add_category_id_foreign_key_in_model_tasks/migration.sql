/*
  Warnings:

  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(0))`.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_task_id_fkey`;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` ENUM('Bug', 'Feature', 'Documentation', 'Refactor', 'Test') NOT NULL;

-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `category_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
