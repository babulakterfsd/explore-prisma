import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //  const result = await prisma.post.create({
  //     data: {
  //         title: "second title",
  //         author: "Babul Akter",
  //         content: "Babul is learning Prisma and he is enjoying it.",
  //     }
  //  })
  //  console.log(result)

  //cretae many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: 'seventh title',
        author: 'Babul Akter',
        content: 'Babul is learning Prisma and he is enjoying it.',
      },
      {
        title: 'eighth title',
        author: 'Babul Akter',
        content: 'Babul is learning Prisma and he is enjoying it.',
      },
      {
        title: 'ninth title',
        author: 'Babul Akter',
        content: 'Babul is learning Prisma and he is enjoying it.',
      },
    ],
  });
};

main();
