import HomeFeed from '@/components/Home/HomeFeed'

export default function HomeFeedSection() {
  return (
    <section className="banners py-5 md:py-10">
      <div className="container mx-auto">
        <div className="grid gap-x-0 md:grid-cols-4 md:gap-x-6 lg:grid-cols-6">
          <div className="md:col-span-2 md:px-0 lg:col-span-3">
            <HomeFeed
              title="Leveling up in CSS"
              categoryTag="CSS"
              dateTime="2022-01-18"
              bannerTime="January 18, 2022"
              sourceImg="/img/webp/photo1_2x.webp"
              altImage="Post Photo"
            />
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-3">
            <HomeFeed
              title="Evolving the Google Identity"
              categoryTag="Graphic"
              dateTime="2022-01-18"
              bannerTime="January 18, 2022"
              sourceImg="/img/webp/photo2_2x.webp"
              altImage="Post Photo"
            />
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-2">
            <HomeFeed
              title="Angular 2 versus React: There Will Be Blood"
              categoryTag="JAVASCRIPT"
              dateTime="2022-03-01"
              bannerTime="March 1, 2022"
              sourceImg="/img/webp/photo3_2x.webp"
              altImage="Post Photo"
            />
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-2">
            <HomeFeed
              title="The End of Global CSS"
              categoryTag="HTML"
              dateTime="2022-01-18"
              bannerTime="January 18, 2022"
              sourceImg="/img/webp/photo4_2x.webp"
              altImage="Post Photo"
            />
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-2">
            <HomeFeed
              title="Building an CSS Framework"
              categoryTag="CSS"
              dateTime="2022-01-18"
              bannerTime="January 18, 2022"
              sourceImg="/img/webp/photo5_2x.webp"
              altImage="Post Photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
