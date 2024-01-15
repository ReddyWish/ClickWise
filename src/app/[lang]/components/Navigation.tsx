'use client'
import {navMenuList} from "@/data/navigationData";
import {CustomLink} from "@/app/[lang]/components/CustomLink";
import {FiMenu} from "react-icons/fi";
import {cn} from "@/utils/helper";
import {useEffect, useState} from "react";
import Image from 'next/image';
import {AiOutlineClose} from "react-icons/ai";
import { Root } from '../../../../dictionaries/types';
import {LocaleSwitcher} from "@/app/[lang]/components/LocaleSwitcher";

export function Navigation({ page }: Root) {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const [selectedPage, setSelectedPage] = useState('#home')

  return (
    <nav className={`py-4 sticky top-0 z-50 bg-transparent md:bg-zinc-900/40 ${isNavOpened ? '' : ''}`}>
      <div className='max-w-7xl px-4 md:px-8 mx-auto flex justify-between items-center max-md:justify-end relative'>
        <CustomLink href='#home' linkType='link' className='max-md:absolute left-5 top-0'>
          <Image src='/Clic (2).svg' alt='logo' width={70} height={70}/>
        </CustomLink>

        <div className='md:hidden cursor-pointer absolute top-5 roght-3' onClick={() => setIsNavOpened((prev) => !prev)}>
          {!isNavOpened ? <FiMenu className='text-2xl'/> : <AiOutlineClose className='text-2xl z-50 absolute right-0'/>}
        </div>
        <div
          className={
          cn(`max-md:fixed max-md:top-0 max-md:z-10 max-md:py-40 max-md:right-0 max-md:w-1/2 max-md:min-h-screen max-md:bg-zinc-900/90 max-md:backdrop-blur-lg ${isNavOpened ? 'max-md:flex items-center justify-center' : 'max-md:hidden'}`)}>
          <ul className={`flex items-center flex-col max-md:gap-10 md:flex-row gap-6 ${isNavOpened ? 'max-md:flex' : 'max-md:hidden '}`}>
            <LocaleSwitcher/>
            {
              Object.values(page.home.navigation).map(({ title, href }, index) => {
                const isLastElement = index === navMenuList.length - 1
                return <li key={href}>
                  <CustomLink href={href} onClick={() => setSelectedPage(href)} linkType={isLastElement ? 'primary' : 'link'} className={'max-md:text-2xl'}>{title}</CustomLink>
                </li>
              })
            }
          </ul>
        </div>
      </div>

    </nav>
  )
}