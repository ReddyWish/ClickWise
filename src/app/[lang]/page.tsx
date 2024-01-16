'use client'
import {Locale} from '../../../i18n.config'
import {ServerHome} from "@/app/components/ServerHome";

export default function Home({ params: { lang } }: {params: { lang: Locale }}) {
  return (
    <ServerHome lang={lang}/>
  )
}
