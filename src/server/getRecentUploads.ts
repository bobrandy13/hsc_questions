import prisma from "~/lib/prisma";

export default function getRecentUploads() {
  return prisma.question.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
}
