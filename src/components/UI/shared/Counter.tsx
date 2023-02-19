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
    let CounterTimeout: any = null
    const updateCount = () => {
      const target = +(counterRef as any).current?.dataset.target
      const count = +(counterRef as any).current.innerText
      const speed = 1000
      const inc = target / speed
      if (count < target) {
        ;(counterRef as any).current.innerText = Math.ceil(count + inc)
        CounterTimeout = setTimeout(updateCount, 1)
      } else {
        ;(counterRef as any).current.innerText = target
      }
    }
    updateCount()
    return () => {
      clearTimeout(CounterTimeout)
    }
  }, [counterRef])

  return (
    <div className={clsx(styles['counters-body'])}>
      <span className={clsx(styles['counter-icon'])}>{icon}</span>
      <h2 ref={counterRef} className="counter-number h2 mt-3 text-secondary" data-target={target}>
        0
      </h2>
      <p className="font-secondary !text-sm !text-bodyColor">{body}</p>
    </div>
  )
}
