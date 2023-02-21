import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { LanguageName } from '@/enums/languageName'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'

interface ILanguageProps {
  icon?: ReactNode
}

export default function Language({ icon }: ILanguageProps) {
  const router = useRouter()
  const { change } = useChangeLanguage()

  return (
    <>
      {icon}
      <select
        onChange={change}
        value={router.locale}
        className="change-language group ml-2.5 flex items-center bg-white text-sm outline-none">
        <option value="en" className="group-hover:underline">
          {LanguageName.English}
        </option>
        <option value="vi" className="group-hover:underline">
          {LanguageName.Vietnam}
        </option>
      </select>
    </>
  )
}
