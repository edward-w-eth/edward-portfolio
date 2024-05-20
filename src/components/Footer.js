import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>2024 &copy; All Right Reserved</span>
        <div className="flex items-center">
          Build with &nbsp;
          <Link
            href="https://github.com/"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Edward Martin
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
