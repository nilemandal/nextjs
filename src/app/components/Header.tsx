import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <>
            <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
                <div>
                    <Image
                        src="/nilemandal.jpeg"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="rounded-full"
                        priority
                    />
                </div>

                <ul className="flex items-center gap-3">
                    <li>
                        <Link href="/">Home </Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}