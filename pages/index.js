import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
const Dynamicproject = dynamic(() => import("./components/projects"), {
  loading: () => "loading...",
});
const Dynamicskill = dynamic(() => import("./components/skills"), {
  loading: () => "loading...",
});
const Dynamicabout = dynamic(() => import("./components/about"), {
  loading: () => "loading...",
});
const Dynamichome = dynamic(() => import("./components/home"), {
  loading: () => "loading...",
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 justify-between dark:text-white">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="absolute right-10 cursor-pointer text-2xl"
          />
        </nav>
        <Dynamichome />
        <Dynamicabout />
        <Dynamicskill />
        <Dynamicproject />
      </main>
    </div>
  );
}
