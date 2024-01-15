import {Navigation} from "@/app/[lang]/components/Navigation";
import {getDictionary} from "../../../../lib/dictionary";
import {Locale} from '../../../../i18n.config'
import { Root } from '../../../../dictionaries/types'

export async function Nav({ lang }: { lang: Locale }) {
  const { page }: Root = await getDictionary(lang)

  return (
    <Navigation page={page}/>
  )
}