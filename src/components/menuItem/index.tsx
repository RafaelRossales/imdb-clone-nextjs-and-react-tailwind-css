import Link from "next/link";
import { ReactNode } from "react";

interface MenuItem{
    title: string;
    address: string;
    Icon: React.FC;
}

export default function MenuItem({ title, address, Icon}:MenuItem){
    return(
        <Link href={address} className="hover:text-amber-500">
            <Icon className="text-2xl sm:hidden"/>
            <p className="uppercase sm:inline text-sm">{title}</p>
        </Link>
    )
}