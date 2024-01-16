import {CustomLink} from "@/app/components/CustomLink";
import Image from "next/image";
import {motion} from 'framer-motion';
import {SocialMediaIcons} from "@/app/components/SocialMediaIcons";
import {Page, Root} from '../../../dictionaries/types'


export function HeroSection({ page }: Root) {
  let section = page.home.hero
  return (
    <section id='home'
             className='flex flex-col-reverse md:flex-row justify-between items-center md:h-full max-md:py-2 z-10'>
      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                  }}
                  className='z-30 basis-2/5 mt-12 md:mt-0 flex flex-col items-start align-top'>
        <div className='relative'>
          <p className='text-6xl mb-1 font-playfair z-10 relative'>Irina Shuvatova</p>
          <Image src='/brush.png' alt='brush' width={140} height={140}
                 className='absolute bottom-[-11px] left-[-5px] z-0'/>
        </div>

        <motion.h1 className='font-title tracking-wider sm:text-6xl -m1-0.5'>
          {section.title}
        </motion.h1>
        <motion.p className='text-zinc-300 mt-2'>
          {section.description}
        </motion.p>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className='z-30 basis-2/5 mt-12 md:mt-0 flex flex-col items-start align-top'>
          <CustomLink href='#contact' className='mt-4 bg-zinc-200 hover:bg-gradient-rainblue hover:text-white transition duration-500'>{section.button}</CustomLink>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className='z-30 basis-2/5 md:mt-0 flex flex-col items-start align-top'>
            <SocialMediaIcons/>
        </motion.div>
      </motion.div>

      <div className='md:order-2 flex justify-center basis-3/5 w-full h-full relative'>
        <motion.div initial='hidden'
             whileInView='visible'
             viewport={{once: true, amount: 0.5}}
             transition={{duration: 0.5}}
             variants={{
               hidden: {opacity: 0},
               visible: {opacity: 1}
             }}
                    className='object-top z-10 relative w-full h-full max-sm:top-0 max-md:top-0'
          >
          <Image src='/avatar.svg' alt='profile' width={900} height={900}/>
        </motion.div>

        <div className='absolute z-10 w-full h-full max-sm:top-0'>
          <div className='absolute left-0 right-0 top-1/2 bg-gradient-to-t from-zinc-900 to-transparent opacity-75 '></div>
        </div>
        <Image src='/blob.svg' alt='background' width={700} height={700} className='absolute z-0 md:bottom-1'/>
      </div>
    </section>
  )
}