import { NEXT_PUBLIC_GA_TRACKING_ID } from './constants'

type ShareArgument = {
  method: string
  contentType: string
  itemId: string | null
}

// https://developers.google.com/analytics/devguides/migration/measurement/virtual-pageviews
export const pageview = (title: string, url: string) => {
  if (!NEXT_PUBLIC_GA_TRACKING_ID) return

  (window as any).gtag('config', NEXT_PUBLIC_GA_TRACKING_ID, {
    page_title: title,
    page_location: url,
  })
}

// https://developers.google.com/gtagjs/reference/ga4-events
export const share = ({ method, contentType, itemId = null }: Partial<ShareArgument>) => {
  if (!NEXT_PUBLIC_GA_TRACKING_ID) return

  (window as any).gtag('event', 'share', {
    method: method,
    content_type: contentType,
    item_id: itemId,
  })
}
