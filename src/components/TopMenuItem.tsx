import Link from "next/link";

interface TopMenuItemProps {
    title: string;
    pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
    return (
        <Link href={pageRef} className="text-sm font-medium text-gray-700 hover:text-black transition-colors" >
        {title}
        </Link>
    );
}