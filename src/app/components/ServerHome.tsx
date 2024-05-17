import {HeroSection} from "@/app/components/HeroSection";
import {Skills} from "@/app/components/Skills";
import {Projects} from "@/app/components/Projects";
import {Testimonials} from "@/app/components/Testimonials";
import {Contact} from "@/app/components/Contact";
import {Footer} from "@/app/components/Footer";
import {Locale} from "../../../i18n.config";
import {Root} from "../../../dictionaries/types";
import {getDictionary} from "../../../lib/dictionary";


export async function ServerHome({ lang }: { lang: Locale }) {
  const { page }: Root = await getDictionary(lang)
  return (
    <div>
      <HeroSection page={page}/>
      <Skills page={page}/>
      <Projects page={page}/>
      <Testimonials page={page}/>
      <Contact page={page}/>
      <Footer page={page}/>
    </div>
  )
}