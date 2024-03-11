import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //------------fluent api----------
  // const getAllPostsFromAUser = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   })
  //   .post();
  //----------------populate-------------
  // const getAllPostsFromAUser = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     post: true,
  //   },
  // });
  // console.log(getAllPostsFromAUser);
  //----------------nested populate--------------
  // const getAllPublishedPost = await prisma.user.findMany({
  //   include: {
  //     post: {
  //       where: {
  //         published: true,
  //       },
  //     },
  //   },
  // });
  // console.dir(getAllPublishedPost, { depth: Infinity });
  //----------------aggregate--------------
  // const avgAgeOfUsers = await prisma.user.aggregate({
  //   _avg: {
  //     age: true,
  //   },
  // });
  // console.log(avgAgeOfUsers);
  //group by
  //--------------------- transaction (batch) -------------------
  // const createUser = prisma.user.create({
  //   data: {
  //     username: 'jhondoe',
  //     email: 'jhon@gmail.com',
  //     age: 68,
  //     role: UserRole.user,
  //   },
  // });
  // const updateAnUsersAge = prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     age: 69,
  //   },
  // });
  // const [createdUser, updatedUser] = await prisma.$transaction([
  //   createUser,
  //   updateAnUsersAge,
  // ]);
  //-------------------------------transaction (interactive)--------------------
  // const result = await prisma.$transaction(async (tx) => {
  //   //query 1
  //   const getAllPosts = await tx.post.findMany({
  //     where: {
  //       published: true,
  //     },
  //   });
  //   //query 2
  //   const totalUsers = await tx.user.count();
  //   //query 3
  //   const updateAdminsAge = await tx.user.updateMany({
  //     where: {
  //       id: 987,
  //     },
  //     data: {
  //       age: 600,
  //     },
  //   });
  //   console.log({
  //     getAllPosts,
  //     totalUsers,
  //     updateAdminsAge,
  //   });
  // });
  //view posts with raw query
  // const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;
  // console.log(posts);
  // await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
  // await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};

main();
