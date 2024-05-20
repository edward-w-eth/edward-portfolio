import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import { animate, motion } from "framer-motion";

const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer absolute"
        whileHover={{scale: 1.05}}
        initial={{x: 0, y: 0}}
        animate={{ x, y}}
        transition={{duration: 1.5}}
        >
            {name}
        </motion.div>
    )
}
const skills = () => {
    return (
        <>
            <Head>
                <title>Ruby, Next, Nest, WebGL | Skills</title>
                <meta name="description" content="backend and frontend skills" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
                    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                        p-8 shadow-dark cursor-pointer absolute"
                        whileHover={{scale: 1.05}}
                        >
                            Full Stack
                        </motion.div>
                        <Skill name="CSS" x="-5vw" y="5vw"/> 
                        <Skill name="TailWind" x="12vw" y="12vw"/> 
                        <Skill name="JavaScript" x="8vw" y="3vw"/> 
                        <Skill name="TypeScript" x="10vw" y="-6vw"/> 
                        <Skill name="ReactJS" x="20vw" y="-10vw"/> 
                        <Skill name="NextJS" x="2vw" y="-15vw"/> 
                        <Skill name="VueJS" x="20vw" y="3vw"/> 
                        <Skill name="Web3JS" x="-11vw" y="-7vw"/> 
                        <Skill name="Mapbox" x="0vw" y="15vw"/> 
                        <Skill name="WebGL" x="-15vw" y="7vw"/> 
                        <Skill name="ThreeJS" x="-24vw" y="0vw"/> 
                        <Skill name="NodeJS" x="-15vw" y="-15vw"/> 
                        <Skill name="Ruby" x="30vw" y="0vw"/> 
                        <Skill name="Solidity" x="-35vw" y="-7vw"/> 
                        <Skill name="Rust" x="-27vw" y="10vw"/> 
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default skills