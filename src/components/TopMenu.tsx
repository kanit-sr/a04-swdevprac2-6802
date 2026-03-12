import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
return (
<header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
            <Image src="/img/logo.png" alt="Venue Explorer Logo" width={40} height={40} priority />
            <span className="text-lg font-semibold text-gray-800">Venue Explorer</span>
            </Link>

            <div className="flex items-center gap-6">
            <TopMenuItem title="Home" pageRef="/" />
            <TopMenuItem title="Booking" pageRef="/booking" />
            <TopMenuItem title="About" pageRef="/about" />
        </div>
    </nav>
</header>
);
}