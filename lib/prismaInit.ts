import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const jason = await prisma.user.findMany({
        where: {
            name: "Jason",
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
