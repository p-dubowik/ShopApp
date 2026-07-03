import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');

  // PRODUCTS
  const espressoMachine = await prisma.product.create({
    data: {
      name: 'Espresso Machine Pro 3000',
      description:
        'Profesjonalny ekspres do kawy z regulacją ciśnienia i temperatury. Idealny dla domowych baristów.',
      price: 249900, // 2499.00 PLN
      mainImage:
        'https://images.unsplash.com/photo-1517256064527-09c73fc73e38',
      images: {
        create: [
          {
            imageUrl:
              'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
          },
          {
            imageUrl:
              'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
          },
        ],
      },
    },
  });

  const tamper = await prisma.product.create({
    data: {
      name: 'Coffee Tamper Stainless Steel',
      description:
        'Profesjonalny tamper 58mm do idealnego ubicia kawy w kolbie.',
      price: 8900, // 89.00 PLN
      mainImage:
        'https://images.unsplash.com/photo-1610889556528-9a770e32642f',
      images: {
        create: [
          {
            imageUrl:
              'https://images.unsplash.com/photo-1587734361993-047a1b9a6e72',
          },
        ],
      },
    },
  });

  const grinder = await prisma.product.create({
    data: {
      name: 'Coffee Grinder Manual Pro',
      description:
        'Ręczny młynek do kawy z ceramicznymi żarnami. Cicha i precyzyjna praca.',
      price: 15900,
      mainImage:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348',
      images: {
        create: [
          {
            imageUrl:
              'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
          },
        ],
      },
    },
  });

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });