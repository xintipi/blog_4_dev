import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Portfolio() {
  const router = useRouter()
  useEffect(() => {
    const { pathname } = router
    if (pathname == '/portfolio') {
      router.push('/portfolio/all').then((r) => r)
    }
  })
}
