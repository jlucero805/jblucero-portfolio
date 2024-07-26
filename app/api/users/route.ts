import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const CreateUserRequestSchema = z.object({
    name: z.string(),
});
type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;

export async function POST(req: Request) {
    const rawBody = await req.json();

    const body: CreateUserRequest = CreateUserRequestSchema.parse(rawBody);

    const user = await prisma.user.create({
        data: body,
    });

    return Response.json({ data: user });
}
