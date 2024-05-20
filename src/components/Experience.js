import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import LiIcon from "./LiIcon";

const workList = [
  {
    position: "Web3 Engineer",
    company: "PIKKLES",
    time: "September 2022 – January 2024",
    address: "Tokyo, Japan",
    work: "led blockchain full stack agile team for developing 3 smart contracts for NFT marketplace, resulting in 30% reduction of development timeline and web3 optimization.",
  },
  {
    position: "Full-Stack Engineer",
    company: "Cart.com",
    time: "October 2021-July 2022",
    address: "Remote",
    work: "Worked as a talent responsive backend and frontend engineer for developing a new JS stack web application including Search Engine Optimization, leading a significant rise in initial load time and TTFB/FCP score.",
  },
  {
    position: "Blockchain Intern",
    company: "Coinbase.com",
    time: "Summer 2021",
    address: "Remote",
    work: "Developed Ruby on Rails backend server, leveraging original web application to be scalable horizontal and vertical and studied how to organize smart contract backend API, collaborating with coinbase.com team mates.",
  },
];

const Detail = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration:0.5, type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <Link href="#" target="_blank" className="text-primary capitalize">
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time}&nbsp;|&nbsp;{address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className={`my-64 ${className}`}>
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[2px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between">
          {workList.map((detail, index) => (
            <Detail {...detail} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
