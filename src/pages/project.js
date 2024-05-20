import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";

const project = () => {
  return (
    <>
      <Head>
        <title>Edward Martin | About Page</title>
        <meta name="description" content="full-stack developer webGL expert" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <h2 className="text-center font-8xl font-bold">Coming Soon...</h2>
        </Layout>
      </main>
    </>
  );
};

export default project;
