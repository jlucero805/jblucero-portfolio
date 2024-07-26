import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const jason = await prisma.user.findMany({
        where: {
            name: "Jason",
        },
    });


    return Response.json({ data: jason });
}

export async function POST(req: Request) {
    const { name } = await req.json();
    const user = await prisma.user.create({
        data: {
            name: name,
        },
    });
    return Response.json({ data: user });
}


