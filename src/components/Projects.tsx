'use client'
import {motion} from 'framer-motion';
import Image from 'next/image';
import {LineGradient} from "@/components/LineGradient";
import Link from "next/link";

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

export function Projects() {
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
          Our <span className='text-fuchsia-500'>Pro</span>jects
        </p>
        <LineGradient width='w-1/3'/>
        <p className='mt-10 mb-10'>
          Dive into the cutting-edge initiatives that define our dedication to staying at the forefront of digital
          marketing.
        </p>
      </motion.div>

      <div className='flex gap-3 max-md:flex-col max-md:items-center max-md:gap-5'>
        <Project title='Loft Oblaka' href='https://www.instagram.com/loft_oblaka_moscow?igsh=ZDE1MWVjZGVmZQ%3D%3D' delay={0} subtitle='Our digital marketing agency spearheaded a successful campaign for a kids
                   loft event project. We leveraged innovative strategies to create buzz and engage our target audience.
                    Through precise targeting, we generated
                    significant interest and attendance, making the event a memorable success'/>

        <Project title='Reelso Mania' href='https://www.instagram.com/reelsomania.pro?igsh=ZDE1MWVjZGVmZQ%3D%3D' delay={0.2} subtitle='Our digital marketing agency was proud to collaborate with a prominent reels maker and teacher
           to develop and elevate their personal brand. With a blend of creativity and strategic precision, we crafted a captivating online presence.'/>

        <Project title='Life Pay' href='https://life-pay.ru/' delay={0.4} subtitle='Our project with a fintech company specializing in payment solutions was a testament to our digital
           marketing prowess. We undertook the task of enhancing their Instagram account, strategically positioning them as industry leaders.'/>

        <Project title='Holy Posh' href='https://www.instagram.com/holyposh?igsh=ZDE1MWVjZGVmZQ%3D%3D' delay={0.6} subtitle='Our project with a personal buyer and stylist involved transforming their Instagram account into a fashion powerhouse.
           We helped launch the product, crafted captivating visuals, shared styling tips, and engaged with their audience to boost their online presence.'/>
      </div>
    </section>
  )
}