import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - @shabad22</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900 h-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
        <Header />
        <section id="hero" className="snap-start scroll-smooth">
          <Hero />
        </section>
        <section id="about" className="snap-start mt-10 scroll-smooth">
          <About />
        </section>
        <section id="skills" className="snap-start scroll-smooth">
          <Skills />
        </section>
        <section id="projects" className="snap-start scroll-smooth">
          <Projects />
        </section>
      </main>
    </>
  );
}
