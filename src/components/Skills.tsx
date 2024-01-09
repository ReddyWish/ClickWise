import {useMediaQuery} from "@/hooks/useMediaQuery";
import Image from "next/image";
import {motion} from 'framer-motion';
import {LineGradient} from "@/components/LineGradient";

export function Skills() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id='skills' className='pb-24 max-md:pb-5'>
      <div className='md:flex md:justify-between md:gap-16 mt-32 max-md:mt-10'>
        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0}
                    }}
                    className='md:w-1/3 relative z-30'>
            <p className='font-playfair font-semibold text-4xl mb-3'>
              Our <span className='text-fuchsia-500'>Skills</span>
            </p>
            <LineGradient width='w-1/2'/>
          <div className='mt-10 mb-7'>
            <ul>
              <li className='pb-2'>💡 Search Engine Optimization (SEO)</li>
              <li className='pb-2'>💡 Content Marketing</li>
              <li className='pb-2'>💡 Social Media Marketing</li>
              <li className='pb-2'>💡 Pay-Per-Click Advertising (PPC)</li>
              <li className='pb-2'>💡 Influencer Marketing</li>
              <li className='pb-2'>💡 Online Advertising</li>
              <li className='pb-2'>💡 Reputation Management</li>
              <li className='pb-2'>💡 Email Marketing</li>
            </ul>
          </div>
        </motion.div>

        <div className='mt-16 md:mt-0'>
          {isAboveMediumScreens ? (
            <div
              className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-fuchsia-500 before:z-[-1]'>
              <div className='md:order-2 flex justify-center basis-3/5 w-full h-full relative'>
                <Image src='/skills.jpg' alt='skills image' width={700} height={200}
                       className='object-cover object-top z-10 w-full relative'/>
                <div className='absolute z-10 w-full h-full'>
                  <div
                    className='absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-zinc-900 to-transparent opacity-75 hover:opacity-0 transition-opacity duration-500'>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='md:order-2 flex justify-center basis-3/5 w-full h-full relative'>
              <Image src='/skills.jpg' alt='skills image' width={700} height={200}
                     className='object-cover object-top z-10 w-full relative'/>
              <div className='absolute z-10 w-full h-full'>
                <div
                  className='absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-zinc-900 to-transparent opacity-75 hover:opacity-0 transition-opacity duration-500'>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

        {/*SKILLS*/}
        <div className="md:flex md:justify-between mt-16 gap-32">
          {/*EXPERIENCE*/}
          <motion.div initial='hidden'
                      whileInView='visible'
                      viewport={{once: true, amount: 0.5}}
                      transition={{duration: 0.5}}
                      variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                      }}
                      className='md:w-1/3 mt-10'>
            <div className='relative h-32'>
              <div className="z-10">
                <p className='font-playfair font-semibold text-5xl'>01</p>
                <p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
            </div>
            <p className="mt-5">
              With seven years of industry experience, we continue to lead the way in dictating digital trends and achieving exceptional results for our clients.
              Our extensive experience has allowed us to fine-tune our strategies, ensuring that we deliver innovative solutions that drive growth and elevate our clients online presence.
            </p>
          </motion.div>

          {/*INOVATIVE*/}
          <motion.div initial='hidden'
                      whileInView='visible'
                      viewport={{once: true, amount: 0.5}}
                      transition={{delay: 0.2, duration: 0.5}}
                      variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                      }}
                      className='md:w-1/3 mt-10'>
            <div className='relative h-32'>
              <div className="z-10">
                <p className='font-playfair font-semibold text-5xl'>02</p>
                <p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-fuchsia-500 absolute right-0 top-0 z-[-1]"/>
            </div>
            <p className="mt-5">
              We do not just follow the industrys best practices, we set them. Our commitment to innovation drives us to explore new horizons and pioneer groundbreaking approaches to digital marketing. By pushing boundaries and staying
              ahead of the curve, we consistently deliver cutting-edge solutions that outperform the competition and exceed our clients expectations.
            </p>
          </motion.div>

          {/*IMAGINATIVE*/}
          <motion.div initial='hidden'
                      whileInView='visible'
                      viewport={{once: true, amount: 0.5}}
                      transition={{delay: 0.4, duration: 0.5}}
                      variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                      }}
                      className='md:w-1/3 mt-10'>
            <div className='relative h-32'>
              <div className="z-10">
                <p className='font-playfair font-semibold text-5xl'>03</p>
                <p className='font-playfair font-semibold text-3xl mt-3'>Imaginative</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
            </div>
            <p className="mt-5">
              We believe that digital marketing is an art as much as it is science. Our imaginative approach brings fresh perspectives to every project, allowing us to craft unique and captivating campaigns. With a flair for thinking outside the box,
              we transform ideas into memorable and impactful marketing experiences that resonate with audiences.
            </p>
          </motion.div>
        </div>
    </section>
  )
}