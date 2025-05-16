import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import Navbar from "./components/Navbar/Navbar";
import SplitTextWrapper from "./components/SplitText/SplittextWrapper";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import FadeContent from "./components/FadeContent/FadeContent";
import Footer from "./components/Footer/Footer";
import SponsorsMarquee from "./components/LogoHorizontal/Logo";
import SimpleCarousel from "./components/Testimonial/Testimoni";
import TwoColumnLayout from "./components/message/message";
import TouchMe from "./components/TouchMe/TouchMe";
import ExperienceSection from "./components/Experience/ExperienceWrapper";
import { BentoGridDemo } from "./components/Projec/projecWrapper";

export default function Home() {
  return (
    <div className=" textmin-h-screen overflow-x-hidden relative">
      <Navbar />{" "}
      <div id="home" className="container  mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex items-center justify-start">
            <div className="justify-col">
              <SplitTextWrapper />
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h1 className="mt-4 text-6xl font-semibold">
                  A <span className="text-blue-600 "> developer</span> & open
                  source enthusiast{" "}
                </h1>
                <h2 className="mt-6 ">
                  I’m building experience working with various brands to design
                  impactful,
                  <br /> mission-focused websites that deliver real results and
                  achieve business goals.
                </h2>
                <a
                  href="#home"
                  className="inline-block mt-8 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-xl shadow-lg transition duration-300 ease-in-out"
                >
                  Download Resume
                </a>
              </FadeContent>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <ExperienceSection />
      </div>
      <div className="container mx-auto mt-20 py-5 border-t border-b">
        <SponsorsMarquee />
      </div>
      <FadeContent
        blur={true}
        duration={3000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div
          id="project"
          className="container tracking-widest scroll-mt-24 mx-auto mt-20 text-2xl text-orange-500"
        >
          My Projects
        </div>
        <div className="container mx-auto mt-3 font-bold text-5xl text-blue-600">
          Some things i’ve made
        </div>
        <div className="container mx-auto mt-3 ">
          <p className="text-neutral-600 dark:text-neutral-400">
            {" "}
            A curated showcase highlighting my skills and the results I’ve
            achieved
          </p>
        </div>
        <div className="container mx-auto mt-5 py-5 ">
          <BentoGridDemo />
        </div>
      </FadeContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        config={{ tension: 80, friction: 25 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.5}
        threshold={0.2}
      >
        <div className="container tracking-widest mx-auto mt-20 text-2xl text-orange-500">
          Say Hello
        </div>
        <div className="container mx-auto ">
          <h1 className="mt-2 mb-2 text-5xl text-blue-600 font-bold ">
            Send it on chain
          </h1>
        </div>
        <div className="container mx-auto ">
          <TwoColumnLayout />
        </div>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 25 }}
        initialOpacity={0.1}
        animateOpacity
        scale={0.5}
        threshold={0.2}
      >
        <div className="container tracking-widest mx-auto mt-20 text-2xl text-orange-500">
          Chain Wall
        </div>
        <div className="container mx-auto ">
          <SimpleCarousel />
        </div>
      </AnimatedContent>
      <div
        id="contact"
        className="relative container bg-checkerboard mx-auto border w-full h-[400px] overflow-hidden"
      >
        {/* Gradasi dari abu ke putih */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-300 via-white/70 to-white pointer-events-none z-0" />

        {/* Konten */}
        <div
          className="relative mt-10 npm i motion clsx tailwind-merge
z-10"
        >
          <TouchMe />
        </div>
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}
