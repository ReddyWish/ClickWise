'use client'
import {motion} from 'framer-motion';
import Image from 'next/image';
import {LineGradient} from "@/app/components/LineGradient";
import Link from "next/link";
import {Root} from "../../../dictionaries/types";

const Project = ({title, subtitle, delay, href}: { title: string, subtitle: string, delay: number, href: string }) => {
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-5 text-deep-blue`
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{delay, duration: 0.7}}
                variants={{
                  hidden: {opacity: 0, scale: 0.8},
                  visible: {opacity: 1, scale: 1}
                }}
                className='relative'>
      <div className={overlayStyles}>
        <p className='text-xl font-playfair'>
          <Link href={href} target='_blank' className='text-xl hover:text-fuchsia-500 transition duration-400'>
            {title}
          </Link>
        </p>
        <p className='mt-7'>
          {subtitle}
        </p>
      </div>
      <Image src={`/${projectTitle}.png`} alt='project' width={400} height={500}/>
    </motion.div>
  )
}

export function Projects({ page }: Root) {
  let section = page.home.projects
  return (
    <section id='projects' className='pt-20 pb-20'>
      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y: 0}
                  }}
                  className='flex flex-col mx-auto items-center gap-5'>
        <p className='font-playfair font-semibold text-4xl mb-3'>
          {section.our} <span className='text-fuchsia-500'>{section.pro}</span>{section.jects}
        </p>
        <LineGradient width='w-1/3'/>
        <p className='mt-10 mb-10'>
          {section.description}
        </p>
      </motion.div>

      <div className='flex gap-3 max-md:flex-col max-md:items-center max-md:gap-5'>
        <Project title='Loft Oblaka' href='https://www.instagram.com/loft_oblaka_moscow?igsh=ZDE1MWVjZGVmZQ%3D%3D' delay={0} subtitle={section["loft-oblaka"]}/>

        <Project title='Reelso Mania' href='https://www.instagram.com/reelsomania.pro?igsh=ZDE1MWVjZGVmZQ%3D%3D' delay={0.2} subtitle={section["reelso-mania"]}/>

        <Project title='Life Pay' href='https://life-pay.ru/' delay={0.4} subtitle={section["life-pay"]}/>

        <Project title='Holy Posh' href='https://www.instagram.com/holyposh?igsh=ZDE1MWVjZGVmZQ%3D%3D' delay={0.6} subtitle={section["holy-posh"]}/>
      </div>
    </section>
  )
}