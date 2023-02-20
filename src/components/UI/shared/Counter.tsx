import clsx from 'clsx'
import { ReactNode, useEffect, useRef } from 'react'

import styles from '@/styles/modules/Counter.module.scss'

interface CounterProps {
  icon: ReactNode
  target: number
  body: string
}

export default function Counter({ icon, target, body }: CounterProps) {
  const counterRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    let counterTimeout: any = null
    let count: any = null
    const updateCount = () => {
      const target = +(counterRef as any).current?.dataset.target
      if ((counterRef as any).current) {
        count = +(counterRef as any).current.innerText
      }
      const speed = 1000
      const inc = target / speed
      if (count < target) {
        ;(counterRef as any).current.innerText = Math.ceil(count + inc)
        counterTimeout = setTimeout(updateCount, 1)
      } else {
        if ((counterRef as any).current) {
          ;(counterRef as any).current.innerText = target
        }
      }
    }
    setTimeout(updateCount, 200)
    return () => {
      clearTimeout(counterTimeout)
    }
  }, [counterRef])

  return (
    <div className={clsx(styles['counters-body'])}>
      <span className={clsx(styles['counter-icon'])}>{icon}</span>
      <h2 ref={counterRef} className="counter-number h2 mt-3" data-target={target}>
        0
      </h2>
      <p className="!text-sm !text-bodyColor">{body}</p>
    </div>
  )
}
