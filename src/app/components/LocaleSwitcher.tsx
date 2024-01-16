'use client'
import {usePathname} from 'next/navigation'
import {i18n} from '../../../i18n.config'
import {Language} from "@/app/components/Language";

export function LocaleSwitcher() {
  const pathname = usePathname()

  return (
    <>
      <ul className='flex gap-x-3'>
        {i18n.locales.map(locale => {
          return (
            <Language key={locale} locale={locale} pathname={pathname}/>
          )
        })}
      </ul>
    </>
  )
}



