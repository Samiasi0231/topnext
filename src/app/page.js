"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <motion.div
      className="h-full min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: "1" }}
    >
      <section className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Image container */}
        <div className="h-64 lg:h-full lg:w-1/2 relative">
          <Image
            src="/asi.png"
            alt="Description of the image"
            fill
            className="object-contain"
          />
        </div>
        {/* Text container */}
        <div className="h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
            Creating Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="md:text-lg text-center lg:text-left">
            Transforming ideas into digital realities. Welcome to my portfolio!
            I&apos;m a web developer passionate about bringing ideas to life online.
            Dive in to discover how I bring visions to life online.
            Thank you for visiting, and enjoy the journey!
          </p>
          {/* Buttons */}
          <div className="flex flex-row sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                View My Works
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;