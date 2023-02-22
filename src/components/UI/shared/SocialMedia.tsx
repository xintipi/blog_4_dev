import Link from 'next/link'
import { ReactNode } from 'react'

interface ISocialMediaProps {
  href: string
  title: string
  icon: ReactNode
}

export default function SocialMedia({ href, title, icon }: ISocialMediaProps) {
  return (
    <Link href={href} className="social-icon" title={title} target="_blank">
      {icon}
    </Link>
  )
}
