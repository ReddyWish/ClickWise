import React from "react";
import {Locale} from '../../../i18n.config'
import Image from 'next/image';
import Link from 'next/link'

export function Language({locale, pathname}: { locale: Locale, pathname: string }) {

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex items-center'>
      {
        locale === 'en'
          ?
          <Link href={redirectedPathName(locale)}>
            <Image src='/unitedkingdom.svg' alt='eng' width={20} height={20}/>
          </Link>
          :
          <Link href={redirectedPathName(locale)}>
            <Image src='/spain.svg' alt='es' width={20} height={20}/>
          </Link>
      }
    </div>
  )
}