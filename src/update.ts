import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 9,
  //     },
  //     data: {
  //       title: 'Title 9',
  //     },
  //   });

  //update many
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       author: 'Babul Akter',
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  // console.log(updateMany)

  const upsertData = await prisma.post.upsert({
    where: {
      id: 16,
    },
    update: {
      title: 'Title 16',
    },
    create: {
      title: 'Title 2',
      content: 'content 2',
      author: 'Babul Akter',
    },
  });

  console.log({ upsertData });
};

main();
