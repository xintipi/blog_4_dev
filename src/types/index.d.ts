import { ReactNode } from 'react'
import { TooltipProps as Props } from 'react-tippy'

declare global {
  interface Window {
    gtag: any
  }
}

declare module 'react-tippy' {
  export interface TooltipProps extends Props {
    children: ReactNode
  }
}

declare module 'gtag.js'
