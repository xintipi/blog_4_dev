import { NEXT_PUBLIC_GA_TRACKING_ID } from '../constants'

type ShareArgument = {
  action: string
  category: string
  label: string | null
  value: any
}

// https://developers.google.com/analytics/devguides/migration/measurement/virtual-pageviews
export const pageview = (url: string) => {
  if (!NEXT_PUBLIC_GA_TRACKING_ID) return
  ;(window as any).gtag('config', NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/gtagjs/reference/ga4-events
export const event = ({ action, category, label, value }: Partial<ShareArgument>) => {
  if (!NEXT_PUBLIC_GA_TRACKING_ID) return
  ;(window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
