"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  const text = "Say Hello!";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-20 xl:px-48">
        {/* Text container */}
        <div className="lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl mb-8 lg:mb-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* Form container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/2 bg-red-50 rounded-xl text-lg sm:text-xl flex flex-col gap-4 sm:gap-6 justify-center p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/snap.jpg"
              alt=""
              width={30}
              height={30}
              className="rounded-full ring-blue-300"
            />
            <h1 className="text-sm">
              NAME:
              <span className="text-red-400">
                SAMUEL ASIMETAMUNOPIRI
              </span>
            </h1>
          </div>

          <span className="text-lg sm:text-sm">Write your invite message!</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none p-2"
            name="user_message"
            placeholder="Enter your message here"
          />

          <span className="text-lg sm:text-xl">Email address:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none p-2"
            placeholder="Enter your email address"
          />
          <span className="mt-4">Regards</span>
          <button
            type="submit"
            className="bg-blue-300 rounded font-semibold text-gray-600 p-2 ring-2 ring-black mt-4"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-sm mt-2">
              Your message has been successfully sent!
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold text-sm mt-2">
              Something went wrong, try again!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;