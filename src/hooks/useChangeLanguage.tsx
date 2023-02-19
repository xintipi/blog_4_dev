import { useRouter } from 'next/router'
import { i18n } from 'next-i18next'
import { ChangeEvent } from 'react'

export const useChangeLanguage = () => {
  const router = useRouter()

  const change = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    router
      .push(router.route, router.asPath, {
        locale: value,
      })
      .then((r) => r)

    router.events.on('routeChangeComplete', () => {
      i18n?.changeLanguage(value)
    })
  }

  return { change }
}
