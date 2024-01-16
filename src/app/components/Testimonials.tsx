import {motion} from 'framer-motion'
import Image from 'next/image'
import {LineGradient} from "@/app/components/LineGradient";
import {Root} from "../../../dictionaries/types";


export function Testimonials({ page }: Root) {
  const testimonialStyles = `mx-auto relative max-w-[350px] h-[350px]
   flex flex-col justify-end p-5 mt-48 before:absolute before:top-[-120px] before:-ml-[-110px] before:left-1/2`
  let section = page.home.testimonials
  return (
    <section id='testimonials' className='pb-16'>
      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                  }}
                  className='flex flex-col items-center md:text-left'>
        <p className='font-playfair font-semibold text-4xl mb-3 text-fuchsia-500'>
          {section.title}
        </p>
        <LineGradient width='w-1/3'/>
      </motion.div>

      {/*TESTIMONIALS*/}
      <div className='md:flex md:justify-between gap-8'>
        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1}
                    }}
                    className={`bg-blue ${testimonialStyles}`}>
          <Image src='/person-1.png' alt='person-1' width={150} height={150} className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        <p className='font-playfair text-6xl'>&quot;</p>
        <p className='font-thin text-l'>{section["01"]}</p>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1}
                    }}
                    className={`bg-fuchsia-500 ${testimonialStyles}`}>
          <Image src='/person-2.png' alt='person-1' width={150} height={150} className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
          <p className='font-playfair text-6xl'>&quot;</p>
          <p className='font-thin text-l'>
            {section["02"]}
          </p>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1}
                    }}
                    className={`bg-yellow ${testimonialStyles}`}>
          <Image src='/person-3.png' alt='person-1' width={150} height={150} className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
          <p className='font-playfair text-6xl'>&quot;</p>
          <p className='font-thin text-l'>
            {section["03"]}</p>
        </motion.div>
      </div>
    </section>
  )
}