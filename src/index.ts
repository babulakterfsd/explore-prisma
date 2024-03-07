import { PrismaClient } from "@prisma/client";

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

const getAllFromDB = await prisma.post.findMany();

console.log(getAllFromDB);



};

main();