import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: 'babulakterfsd',
  //       email: 'babulakterfsd@gmail.com',
  //       age: 32,
  //       role: UserRole.admin,
  //     },
  //   });
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: `I'm a app developer and exploring prisma now.`,
  //       userId: 3,
  //     },
  //   });
  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: 'Backend',
  //     },
  //   });
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: 'Create bloomhub backend',
  //       content: 'I create bloomhub backend using mongoose and express',
  //       published: false,
  //       authorId: 1,
  //       postCategory: {
  //         create: {
  //           category: {
  //             connect: {
  //               id: 4,
  //             },
  //           },
  //         },
  //       },
  //     },
  //     include: {
  //       postCategory: true,
  //     },
  //   });
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: 'Create final backend',
  //       content: 'I create final backend using mongoose and express',
  //       published: false,
  //       authorId: 1,
  //       postCategory: {
  //         create: {
  //           categoryId: 4,
  //         },
  //       },
  //     },
  //     include: {
  //       postCategory: true,
  //     },
  //   });
  //   console.log(createPost);
};

main();
