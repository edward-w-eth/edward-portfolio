import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import aboutMe from "../../public/images/profile/aboutMe.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/components/Education";

const AnimatedNumnbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Edward Martin | About Page</title>
        <meta name="description" content="full-stack developer webGL expert" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Stay Hungry, Stay Foolish" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark">
                About Me
              </h2>
              <p className="font-medium">
                {`
                                    Hi, I'm Edward Martin by name, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                                    and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                                    new and innovative ways to bring my clients' visions to life.
                                    `}
              </p>
              <p className="font-medium">
                {`
                                    I believe that design is about more than just making things look pretty.  it's about solving problems and  creating intuitive, enjoyable experiences for users. 
                                    `}
              </p>
              <p className="font-medicum">
                {`
                                    Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                                    `}
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-1 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark">
              <div className="absolute  top-0 -right-3 -z-10  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light"></div>
              <Image
                src={aboutMe}
                alt="About Edward Martin"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  +<AnimatedNumnbers value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  +<AnimatedNumnbers value={30} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Project Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  +<AnimatedNumnbers value={6} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Education className={"!my-20"}/>
        </Layout>
      </main>
    </>
  );
};

export default about;
