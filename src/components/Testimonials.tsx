import {motion} from 'framer-motion'
import Image from 'next/image'
import {LineGradient} from "@/components/LineGradient";


export function Testimonials() {
  const testimonialStyles = `mx-auto relative max-w-[350px] h-[350px]
   flex flex-col justify-end p-5 mt-48 before:absolute before:top-[-120px] before:-ml-[-110px] before:left-1/2`

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
          Testimonials
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
        <p className='font-thin text-l'>Impressive! ClickWise Solutions has truly revolutionized our digital marketing game.
          Their innovative strategies and creative approach have led to remarkable results.
          We have seen a significant increase in our online presence, and our brand has never looked better.</p>
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
            Working with ClickWise Solutions has been an absolute delight. Their team is highly professional,
            and their dedication to our project was evident from day one.
            They have helped us achieve outstanding growth and have consistently exceeded our expectations.
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
            ClickWise Solutions is the digital marketing agency you can trust.
            Their attention to detail, commitment to excellence, and ability to adapt to ever-changing trends make them a top choice.
            We are thrilled with the results they have delivered,
            and we look forward to continued success together.</p>
        </motion.div>
      </div>
    </section>
  )
}