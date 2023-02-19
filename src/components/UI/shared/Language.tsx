import clsx from 'clsx'
import { useRouter } from 'next/router'

import { LanguageName } from '@/enums/languageName'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'

interface LanguageProps {
  icon?: string
}

export default function Language({ icon }: LanguageProps) {
  const router = useRouter()
  const { change } = useChangeLanguage()

  return (
    <>
      <i
        className={clsx({
          'mr-2.5 text-xl': true,
          [`${icon}`]: !!icon,
        })}
      />
      <select
        onChange={change}
        value={router.locale}
        className="change-language group flex items-center bg-white text-sm outline-none">
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
