import type { nProgress } from 'nprogress'

declare global {
  interface Window {
    gtag: any
  }
}
declare module 'nprogress' {
  interface NProgress extends nProgress {
    options: ({ color, height }: { color?: string; height?: string | number }) => void
    [key: string]: any
  }
}

declare module 'gtag.js'
