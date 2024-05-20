import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  DiscordIcon,
  FigmaIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TelegramIcon,
} from "./Icon";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
            h-[1px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath == href ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MotionLink = motion(Link);

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex item-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/skill" title="Skills" className="mx-4" />
        <CustomLink href="/project" title="My Projects" className="mx-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <MotionLink
          href="/"
          target={"_blank"}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <MailIcon />
        </MotionLink>
        <MotionLink
          href="/"
          target={"_blank"}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TelegramIcon />
        </MotionLink>
        <MotionLink
          href="/"
          target={"_blank"}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DiscordIcon />
        </MotionLink>
        <MotionLink
          href="/"
          target={"_blank"}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FigmaIcon />
        </MotionLink>
        <MotionLink
          href="/"
          target={"_blank"}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedinIcon />
        </MotionLink>
        <MotionLink
          href="/"
          target={"_blank"}
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </MotionLink>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
