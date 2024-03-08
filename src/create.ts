import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: 'babulakterfsd',
      email: 'babulakterfsd@gmail.com',
      role: UserRole.user,
    },
  });
};

main();
