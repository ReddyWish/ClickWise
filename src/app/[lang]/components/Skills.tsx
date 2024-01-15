import {useMediaQuery} from "@/hooks/useMediaQuery";
import Image from "next/image";
import {motion} from 'framer-motion';
import {LineGradient} from "@/app/[lang]/components/LineGradient";
import {Locale} from "../../../../i18n.config";
import {Root} from "../../../../dictionaries/types";
import {getDictionary} from "../../../../lib/dictionary";

export function Skills({ page }: Root) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  let section = page.home.skills
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
              <span className='text-white'>{section.service} <span className='text-fuchsia-500'>&</span> {section.costs}</span>
            </p>
            <LineGradient width='w-1/2'/>
          <div className='mt-10 mb-7'>
            <ul>
              <li className='pb-5'>
                💡 {section.seo}
                <p className='pl-6 text-zinc-300 text-xs'>€1,100 – €4,000 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section["content marketing"]}
                <p className='pl-6 text-zinc-300 text-xs'>€1,500 – €10,000 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section[ "social media marketing"]}
                <p className='pl-6 text-zinc-300 text-xs'>€900 – €20,000 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section["pay-per-click"]}
                <p className='pl-6 text-zinc-300 text-xs'>€4,100 – €7,000 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section["influencer marketing"]}
                <p className='pl-6 text-zinc-300 text-xs'>€1,000 – €3,000 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section["online advertising"]}
                <p className='pl-6 text-zinc-300 text-xs'>€2,100 – €4,500 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section["reputation management"]}
                <p className='pl-6 text-zinc-300 text-xs'>€500 – €4,000 / {section.month}</p>
              </li>
              <li className='pb-2'>
                💡 {section["email marketing"]}
                <p className='pl-6 text-zinc-300 text-xs'>€300 – €5,000 / {section.month}</p>
              </li>
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
                <p className='font-playfair font-semibold text-3xl mt-3'>{section["experience-title"]}</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
            </div>
            <p className="mt-5">
              {section["experience-description"]}
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
                <p className='font-playfair font-semibold text-3xl mt-3'>{section["innovative-title"]}</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-fuchsia-500 absolute right-0 top-0 z-[-1]"/>
            </div>
            <p className="mt-5">
              {section["innovative-description"]}
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
                <p className='font-playfair font-semibold text-3xl mt-3'>{section["imaginative-title"]}</p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
            </div>
            <p className="mt-5">
              {section["imaginative-description"]}
            </p>
          </motion.div>
        </div>
    </section>
  )
}