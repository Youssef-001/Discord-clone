-- CreateEnum
CREATE TYPE "FriendRequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "UserFriends" ADD COLUMN     "status" "FriendRequestStatus" NOT NULL DEFAULT 'PENDING';
