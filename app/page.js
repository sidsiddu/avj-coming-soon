"use client";

console.log("Vercel hotfix deploy");

import React from "react";
import { Antonio, Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: '--font-bricolage-grotesque',
});

const antonio = Antonio({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: '--font-antonio',
});

import { motion } from "motion/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Countdown from "./components/Countdown.js";
import Ripple from "./components/Ripple.js";

import "@/styles/demo/demo7.scss";

export default function Home() {
  return (
    <main className={`main-content-7 ${bricolageGrotesque.className} w-full overflow-clip`}>
      <motion.div
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className={`${bricolageGrotesque.className} capitalize sticky text-xs sm:text-sm w-full max-w-full left-0 top-0 overflow-clip z-50`}
      >
        <Marquee direction="right" className="py-1 bg-[var(--primary)] text-white">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="mx-2.5 md:mx-4">
              Website relaunching February 4 — AVJ Technology is transitioning into Autonomous Vehicle Solutions
            </div>
          ))}
        </Marquee>
      </motion.div>

      <div className="relative flex h-[80vh] w-full flex-col items-center justify-center">
        <div className={`-mt-16 text-center ${antonio.variable} ${bricolageGrotesque.variable}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="text-2xl font-bold mb-12 inline-block">AVJ Technology</Link>
          </motion.p>

          <Countdown date={`2026-02-04T00:00:00`} />
        </div>

        <Ripple />
      </div>

      <section className="-mt-20 pb-16 px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[600px] mx-auto text-balance text-center"
        >
          AVJ Technology is evolving into an autonomous vehicle software company. We’re building AI-powered mobility platforms and collaborating with industry leaders like NVIDIA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-base sm:text-lg max-w-2xl mx-auto space-y-6 text-center"
        >
          <p>
            Our legacy Dealer DMS will be sunset on January 30. All users are advised to migrate to Frazer or DealerCenter. Contact your AVJ representative if you need assistance with the transition.
          </p>

          <p>
            We’re actively hiring for development, data, and automation roles. Send your resume to <a href="mailto:careers@avjtechnology.com" className="underline text-blue-300">careers@avjtechnology.com</a>.
          </p>

          <p>
            Stay tuned for the full relaunch on February 4 as we unveil our next generation platform, product demos, and partner ecosystem.
          </p>
        </motion.div>
      </section>

      <footer className="px-8 py-8 mt-1">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-1/2 text-center md:text-start order-2 md:order-1">
              <span className="text-sm text-balance inline-block">
                &copy; {new Date().getFullYear()} AVJ Technology – All rights reserved
              </span>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
              <ul className="flex items-center justify-center md:justify-end flex-wrap gap-4 [&_li]:leading-[0] [&_a]:bg-black/4 [&_a]:rounded-lg">
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
