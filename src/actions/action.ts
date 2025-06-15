"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData){
    const title = formData.get('title') as string | null;
    const content = formData.get('content') as string | null;

    if (!title) {
        throw new Error("Title is required");
    }
    if (!content) {
        throw new Error("Content is required");
    }

    await prisma.post.create({
        data: {
            title,
            content
        }
    });

    revalidatePath("/posts");
}
