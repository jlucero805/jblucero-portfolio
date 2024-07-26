import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug;

    const user = await prisma.user.findUnique({
        where: {
            id: Number(slug),
        },
    });

    return Response.json({ data: user });
}
