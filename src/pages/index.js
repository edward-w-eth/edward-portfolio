import Head from 'next/head'
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/Edward.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex !w-1/3 md:inline-block md:w-full'>
              <Image src={profilePic} alt="Edward Martin" className="w-full h-auto" />
            </div>
            <div className='flex !w-2/3 flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={`Solidity | WebGL | Ruby Developer 6 Years of Experience`} className='!text-6xl' />
              <p className='my-4 text-base font-medium'>
                With over 6 years of dedicated development and leading to success divers projects in backend and frontend development
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:edwardmeth2@gmail.com"
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
