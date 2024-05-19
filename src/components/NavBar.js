import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const CustomLink = ({href, title, className=""}) => {
    return (
        <Link href={href}>
            {title}
        </Link>
    )
}
const NavBar = () => {
    return (
        <header
        className="w-full px-32 py-8 font-medium flex item-center justify-between"
        >
            <nav>
                <Link href="/">Home</Link>
                <CustomLink href="/" title="Home"/>
                <CustomLink href="/about" title="About"/>
                <CustomLink href="/skill" title="Skills"/>
                <CustomLink href="/project" title="My Projects"/>
                <CustomLink href="/contact" title="Contact"/>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>

        </header>
    )
}

export default NavBar;