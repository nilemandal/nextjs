
export default async function Page() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl capitalize font-bold mb-4"> Posts Page </h1>
            <ul>
                {data.posts.map((post: { id: number; title: string }) => (
                    <li key={post.id} className="mb-2">
                        <a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}