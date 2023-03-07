import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function usePathOrigin() {
  const router = useRouter()
  const [ogUrl, setOgUrl] = useState<string>('')

  useEffect(() => {
    const host = window.location.host
    const baseUrl = `https://${host}`

    setOgUrl(`${baseUrl}${router.asPath}`)
  }, [router.asPath])

  return ogUrl
}
