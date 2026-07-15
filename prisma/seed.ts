import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main () {

    console.log('Seeding...');
    
    const products = [
        {
            name: "Sage Barista Express",
            featured: true,
            price: 299900,
            mainImage: "https://i.postimg.cc/NFbRTsYV/Sage-B1.png",
            description: "A popular home espresso machine with an integrated conical burr grinder, PID temperature control and a powerful steam wand. It allows users to grind, brew and texture milk in a single compact machine, making it an excellent choice for anyone starting a home espresso setup while still offering room to grow.",
            images: [
                "https://i.postimg.cc/L5vjf9RG/Sage-B2.png",
                "https://i.postimg.cc/QCSc58s2/Sage-B3.png",
            ],
        },
        {
            name: "Sage Bambino Plus",
            featured: true,
            price: 209900,
            mainImage: "https://i.postimg.cc/Znj63b4z/Sage-Bamb-(1).png",
            description: "Compact espresso machine featuring ThermoJet heating, automatic milk texturing and fast heat-up time. Perfect for kitchens with limited space while still producing café-quality espresso.",
            images: ["https://i.postimg.cc/0jZ7mkPq/Sage-Bamb-(2).png","https://i.postimg.cc/fy5YXzDZ/Sage-Bamb-(3).png"],
        },
        {
            name: "Gaggia Classic Evo Pro",
            featured: true,
            price: 229900,
            mainImage: "https://i.postimg.cc/gj43Rzdy/Gaggia-Evo-(1).png",
            description: "A legendary Italian espresso machine built with a commercial-style steam wand and durable stainless-steel body. Known for reliability, upgrade potential and excellent espresso extraction.",
            images: ["https://i.postimg.cc/RhGwfS9T/Gaggia-Evo-(2).png","https://i.postimg.cc/qqQ2nJ0L/Gaggia-Evo-(3).png"],
        },
        {
            name: "Rancilio Silvia Pro X",
            featured: false,
            price: 739900,
            mainImage: "https://i.postimg.cc/D051svFB/Rancilio-(1).png",
            description: "Premium dual-boiler espresso machine with PID temperature control and exceptional steam performance. Designed for demanding home baristas.",
            images: ["https://i.postimg.cc/RhGwfS9P/Rancilio-(2).png","https://i.postimg.cc/Hn3b5YHZ/Rancilio-(3).png"],
        },
        {
            name: "Lelit Anna PL41TEM",
            featured: false,
            price: 289900,
            mainImage: "https://i.postimg.cc/QCSc58sS/Lelit-(1).png",
            description: "Single-boiler espresso machine with PID controller and brass boiler. Delivers stable brewing temperatures and excellent value for serious espresso enthusiasts.",
            images: ["https://i.postimg.cc/8cwLWpDZ/Lelit-(2).png"],
        },
        {
            name: "De'Longhi La Specialista Arte",
            featured: false,
            price: 249900,
            mainImage: "https://i.postimg.cc/PJdmPpGv/De-Longhi-(1).png",
            description: "User-friendly espresso machine combining assisted tamping, integrated grinder and manual steaming. Great bridge between automatic and enthusiast machines.",
            images: ["https://i.postimg.cc/rsqSK06W/De-Longhi-(2).png","https://i.postimg.cc/j2RzLwVH/De-Longhi-(3).png"],
        },
        {
            name: "Eureka Mignon Specialità",
            featured: true,
            price: 199900,
            mainImage: "https://i.postimg.cc/nrnvCj8v/Eureka-M.png",
            description: "Quiet premium grinder equipped with 55 mm flat burrs and stepless adjustment. Delivers extremely consistent espresso grinding with minimal retention.",
            images: [],
        },
        {
            name: "Baratza Encore ESP",
            featured: true,
            price: 99900,
            mainImage: "https://i.postimg.cc/XqnwpGM7/Baratza-Enc-(1).png",
            description: "Affordable all-round grinder designed with espresso in mind while remaining versatile enough for filter coffee brewing.",
            images: ["https://i.postimg.cc/1Xypfnx4/Baratza-Enc-(2).png","https://i.postimg.cc/ZnJrCBk5/Baratza-Enc-(3).png"],
        },
        {
            name: "Fellow Opus",
            featured: false,
            price: 99900,
            mainImage: "https://i.postimg.cc/8cThjJ8d/Fellow-Opus-(1).png",
            description: "Modern single-dose grinder offering broad grind adjustment, stylish design and excellent performance for espresso and pour-over alike.",
            images: ["https://i.postimg.cc/mkTQtzx8/Fellow-Opus-(2).png","https://i.postimg.cc/GtzvYLrk/Fellow-Opus-(3).png"],
        },
        {
            name: "Timemore Sculptor 064S",
            featured: false,
            price: 229900,
            mainImage: "https://i.postimg.cc/nrTq7Fpp/Timemore-(1).png",
            description: "High-end grinder featuring innovative burr geometry, excellent workflow and precise grind adjustment for espresso brewing.",
            images: ["https://i.postimg.cc/9XBdspTr/Timemore-(2).png","https://i.postimg.cc/Znj63b4T/Timemore-(3).png"],
        },
        {
            name: "1Zpresso J-Max S",
            featured: false,
            price: 99900,
            mainImage: "https://i.postimg.cc/NM66s8nK/1zpresso-(1).png",
            description: "Premium manual grinder with titanium-coated burrs and ultra-fine adjustment designed specifically for espresso preparation.",
            images: ["https://i.postimg.cc/qqp8zhfR/1zpresso-(2).png"],
        },
    ];

    for (const prod of products) {
        await prisma.product.create({
            data: {
                name: prod.name,
                description: prod.description,
                price: prod.price,
                featured: prod.featured,
                mainImage: prod.mainImage,
                images: {
                    create: prod.images.map(imageUrl => ({ imageUrl })),
                },
            },
        });
    }

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