import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //find all
  //   const getAllFromDB = await prisma.post.findMany();

  //find first or throw error
  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       author: 'Babul Akter Awal',
  //     },
  //   });

  //find unique
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 15,
    },
  });

  console.log({ findUnique });
};

main();
