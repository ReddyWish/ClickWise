import {HeroSection} from "@/app/[lang]/components/HeroSection";
import {Skills} from "@/app/[lang]/components/Skills";
import {Projects} from "@/app/[lang]/components/Projects";
import {Testimonials} from "@/app/[lang]/components/Testimonials";
import {Contact} from "@/app/[lang]/components/Contact";
import {Footer} from "@/app/[lang]/components/Footer";
import {Locale} from "../../../../i18n.config";
import {Root} from "../../../../dictionaries/types";
import {getDictionary} from "../../../../lib/dictionary";


export async function ServerHome({ lang }: { lang: Locale }) {
  const { page }: Root = await getDictionary(lang)
  return (
    <div>
      <HeroSection page={page}/>
      <Skills page={page}/>
      <Projects page={page}/>
      <Testimonials page={page}/>
      <Contact page={page}/>
      <Footer/>
    </div>
  )
}