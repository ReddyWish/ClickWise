import {LineGradient} from '@/app/components/LineGradient';
import {useForm} from 'react-hook-form';
import {motion} from 'framer-motion';
import Image from 'next/image';
import React, {useState} from "react";
import {Root} from "../../../dictionaries/types";

export function Contact({ page }: Root) {
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  let section = page.home.contacts

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id='contact' className='py-16'>
      {/*HEADINGS*/}
      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                  }}>
        <div>
          <p className='font-playfair font-semibold text-4xl mb-3'>
            <span className='text-fuchsia-500'>{section.title}</span>
          </p>
          <LineGradient width='w-1/3'/>
        </div>
      </motion.div>

      {/*FORM AND IMAGE SECTION*/}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, y: 50},
                      visible: {opacity: 1, y: 0}
                    }}
                    className='basis-1/2 mt-10 md:mt-0'>
          <Image src='/contact.jpg' alt='contact' width={500} height={500}/>
        </motion.div>

        <motion.div initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, y: 50},
                      visible: {opacity: 1, y: 0}
                    }}
                    className='basis-1/2 mt-10 md:mt-0'>
          <form
            target='_blank'
            onSubmit={onSubmit}
            action='https://formsubmit.co/I.shuvatova@yahoo.com'
            method='POST'>
            <input
              className='w-full bg-zinc-100 text-zinc-900 font-semibold placeholdre-opaque-black p-3'
              type='text'
              placeholder={section.name}
              {...register('name', {
                required: true,
                maxLength: 100,
              })}/>
            {
              errors.name && (
                <p className='text-red mt-1'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' && 'Max Length is 100 char'}
                </p>
              )
            }

            <input className='w-full bg-zinc-100 text-zinc-900 font-semibold placeholdre-opaque-black p-3 mt-5'
                   type='email'
                   placeholder={section.email}
                   {...register('email', {
                     required: true,
                     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   })}
            />
            {
              errors.email && (
                <p className='text-red mt-1'>
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pettern' && 'Invalid email address'}
                </p>
              )
            }

            <textarea className='w-full bg-zinc-100 text-zinc-900 font-semibold placeholdre-opaque-black p-3 mt-5'
                   rows={4}
                   cols={80}
                   placeholder={section.message}
                   {...register('message', {
                     required: true,
                     maxLength: 2000,
                   })}
            />
            {
              errors.message && (
                <p className='text-red mt-1'>
                  {errors.message.type === 'required' && 'This field is required'}
                  {errors.message.type === 'maxLength' && 'Max length is 2000 char'}
                </p>
              )
            }
            <button type='submit' className='p-3 w-full bg-gradient-rainblue text-black mt-5 hover:text-white transition duration-500 rounded-full'>
              {section["lets talk"]}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}