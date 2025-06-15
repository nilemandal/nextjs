import { prisma } from "@/lib/db";
import { createPost } from "@/src/actions/action";
import Link from "next/link";

export default async function Page() {
    const posts = await prisma.post.findMany();    

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl capitalize font-bold mb-4"> Posts Page </h1>
            <ul>
                {posts.map((post: { id: number; title: string }) => (
                    <li key={post.id} className="mb-2">
                        <Link href={`/posts/${post.id}`}> {post.title} </Link>
                    </li>
                ))}
            </ul>

            <form action={createPost} className="max-w-[400px] mx-auto mt-24">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
                />
                <textarea
                    placeholder="Content"
                    name="content"
                    className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create Post
                </button>
            </form>
        </div>
    )
}