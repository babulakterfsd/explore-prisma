import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 16,
  //     },
  //   });

  const deleteMany = await prisma.post.deleteMany({});

  console.log({ deleteMany });
};

main();
