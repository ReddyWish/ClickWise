'use client'
import {HeroSection} from "@/components/HeroSection";
import {Skills} from "@/components/Skills";
import {Projects} from "@/components/Projects";
import {Testimonials} from "@/components/Testimonials";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
