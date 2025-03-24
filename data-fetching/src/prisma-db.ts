import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.product.count();

  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          price: 500,
          description: "Description 1 ",
        },
        {
          title: "Product 2",
          price: 1000,
          description: "Description 2",
        },
        {
          title: "Product 3",
          price: 1500,
          description: "Description 3",
        },
      ],
    });
  }
};

// run seeds if needed
seedProducts();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (query?: string) => {
  await delay(1500);

  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }

  return prisma.product.findMany();
};

export const getProduct = async (id: number) => {
  await delay(1500);

  return prisma.product.findUnique({ where: { id } });
};

export const addProduct = async (
  title: string,
  price: number,
  description: string
) => {
  await delay(1500);

  return prisma.product.create({ data: { title, price, description } });
};

export const updateProduct = async (
  id: number,
  title: string,
  price: number,
  description: string
) => {
  await delay(1500);

  return prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
};

export const deleteProduct = async (id: number) => {
  await delay(1500);

  return prisma.product.delete({ where: { id } });
};
