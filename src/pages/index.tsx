import clsx from 'clsx'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'
import { FiBookmark, FiSend } from 'react-icons/fi'

import HomeFeedSection from '@/components/Home/HomeFeedSection'
import Pagination from '@/components/UI/shared/Pagination'
import SocialMedia from '@/components/UI/shared/SocialMedia'
import { feeds } from '@/data/feeds'
import { social } from '@/data/social'
import usePathOrigin from '@/hooks/usePathOrigin'
import { IHomeFeeds } from '@/interface/homeFeeds.interface'
import AppLayout from '@/layouts/AppLayout'
import { AppStore, wrapper } from '@/store'
import styles from '@/styles/modules/Home.module.scss'

export const getStaticProps = wrapper.getStaticProps(
  (store: AppStore) =>
    async ({ locale }: GetStaticPropsContext) => {
      try {
        const images = await Promise.all(
          feeds.slice(0, 5).map(async (data) => {
            const { base64, img } = await getPlaiceholder(data.thumbnailUrl)
            return {
              ...img,
              blurDataURL: base64,
            }
          })
        )

        const { base64, img } = await getPlaiceholder('/img/me/me1.jpg')

        const avatar = { ...img, blurDataURL: base64 }

        return {
          props: {
            avatar,
            images,
            feeds,
            fallback: 'blocking',
            ...(await serverSideTranslations(locale as string, ['header', 'footer'])),
          },
        }
      } catch (error) {
        return {
          notFound: true,
        }
      }
    }
)

export default function Home({ avatar, images, feeds }: IHomeFeeds) {
  const ogUrl = usePathOrigin()
  // @ts-ignore
  return (
    <AppLayout
      title="Home DEV"
      canonical={ogUrl}
      description="Let's learn about the wonders of technology. Be it tutorials on web development, IT, or hiring a front-end developer and then what are waiting for?, let do it!"
      keywords="software development, engineering, javascript, vuejs, nuxtjs, reactjs, nextjs, blog, profile, cv, resume"
      openGraph={{
        type: 'website',
        siteName: 'Home DEV',
        url: ogUrl,
        locale: i18n?.language === 'en' ? 'en_US' : 'vi_VN',
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <HomeFeedSection images={images} feeds={feeds} />

      <main>
        <div className="container mx-auto">
          <div className="grid gap-x-0 md:gap-x-6 lg:grid-cols-3">
            <div className="col-span-3 lg:col-span-2">
              <section className={clsx(styles['articles'])}>
                <article className={clsx(styles['article'], 'mb-7.5 before:bg-blueColor')}>
                  <div className={clsx(styles['article-header'])}>
                    <time dateTime="2022-10-11">12 hours ago</time>
                    <span className={clsx(styles['article-header-tag'])}>Hot</span>
                    <span className={clsx(styles['article-header-category'])}>
                      <Link
                        href="/blog-post"
                        className="float-right text-blueColor hover:underline"
                        title="CSS">
                        CSS
                      </Link>
                    </span>
                  </div>
                  <div className="article-content px-8">
                    <h2 className="my-6.5 text-3xl leading-10 md:text-4xl md:leading-46px">
                      <Link
                        href="/blog-post"
                        className="font-black text-secondary hover:underline"
                        title="10 Interview Questions Every JavaScript Developer Should Know">
                        10 Interview Questions Every JavaScript Developer Should Know
                      </Link>
                    </h2>
                    <p>
                      I was young, single, and freshly employed to direct National Journal’s
                      Presentation Center, a searchable library of white-label PowerPoint
                      presentations on political and policy developments. By day, I led a team of
                      fellows in creating data visualizations...
                    </p>
                  </div>
                  <div className={clsx(styles['article-footer'])}>
                    <ul className="article-footer-info mb-5 flex items-center md:mb-0">
                      <li>
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="7 Response">
                          <i className="pe-7s-comment mr-3 text-4xl text-secondary"></i>7 Response
                        </Link>
                      </li>
                      <li className="ml-5.5">
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="1221">
                          <i className="pe-7s-like mr-3 text-4xl text-secondary"></i>
                          1221
                        </Link>
                      </li>
                    </ul>
                    <Link href="/blog-post" className="btn" title="Read more">
                      Read more
                    </Link>
                  </div>
                </article>
                <article className={clsx(styles['article'], 'my-7.5 before:bg-redColor')}>
                  <div className={clsx(styles['article-header'])}>
                    <time dateTime="2022-10-11">January 16, 2022</time>
                    <span className={clsx(styles['article-header-category'])}>
                      <Link
                        href="/blog-post"
                        className="float-right text-redColor hover:underline"
                        title="Javascript">
                        Javascript
                      </Link>
                    </span>
                  </div>
                  <div className="article-content px-8">
                    <h2 className="my-6.5 text-3xl leading-10 md:text-4xl md:leading-46px">
                      <Link
                        href="/blog-post"
                        className="font-black text-secondary hover:underline"
                        title="State of the Art JavaScript in 2022">
                        State of the Art JavaScript in 2022
                      </Link>
                    </h2>
                    <p>
                      Class in JS is not harmless sugar for prototypal OO. Class is a virus that
                      infects everything it touches. It came to us formally in JavaScript with ES6,
                      and at the same time, React was taking off. Lots of people started using
                      classes for React components...
                    </p>
                  </div>
                  <div className={clsx(styles['article-footer'])}>
                    <ul className="article-footer-info mb-5 flex items-center md:mb-0">
                      <li>
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="7 Response">
                          <i className="pe-7s-comment mr-3 text-4xl text-secondary"></i>7 Response
                        </Link>
                      </li>
                      <li className="ml-5.5">
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="1221">
                          <i className="pe-7s-like mr-3 text-4xl text-secondary"></i>
                          1221
                        </Link>
                      </li>
                    </ul>
                    <Link href="/blog-post" className="btn" title="Read more">
                      Read more
                    </Link>
                  </div>
                </article>
                <article className={clsx(styles['article'], 'my-7.5 before:bg-yellowColor')}>
                  <div className={clsx(styles['article-header'])}>
                    <time dateTime="2022-10-11">12 hours ago</time>
                    <span className="article-header-category">
                      <Link
                        href="/blog-post"
                        className="float-right text-yellowColor hover:underline"
                        title="CSS">
                        CSS
                      </Link>
                    </span>
                  </div>
                  <div className="article-content px-8">
                    <h2 className="my-6.5 text-3xl leading-10 md:text-4xl md:leading-46px">
                      <Link
                        href="/blog-post"
                        className="font-black text-secondary hover:underline"
                        title="Want to learn JavaScript in 2022?">
                        Want to learn JavaScript in 2022?
                      </Link>
                    </h2>
                    <p>
                      This is a walk-through of the steps I personally took in a single year, to
                      begin learning JavaScript. My goal was to be able to get a job in a position
                      where Javascript would be at the forefront of what I do on a daily basis...
                    </p>
                  </div>
                  <div className={clsx(styles['article-footer'])}>
                    <ul className="article-footer-info mb-5 flex items-center md:mb-0">
                      <li>
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="7 Response">
                          <i className="pe-7s-comment mr-3 text-4xl text-secondary"></i>7 Response
                        </Link>
                      </li>
                      <li className="ml-5.5">
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="1221">
                          <i className="pe-7s-like mr-3 text-4xl text-secondary"></i>
                          1221
                        </Link>
                      </li>
                    </ul>
                    <Link href="/blog-post" className="btn" title="Read more">
                      Read more
                    </Link>
                  </div>
                </article>
                <article className={clsx(styles['article'], 'my-7.5')}>
                  <div className={clsx(styles['article-header'])}>
                    <time dateTime="2022-10-11">12 hours ago</time>
                    <span className="article-header-category">
                      <Link href="/blog-post" className="float-right hover:underline" title="Other">
                        Other
                      </Link>
                    </span>
                  </div>
                  <div className="article-content px-8">
                    <h2 className="my-6.5 text-3xl leading-10 md:text-4xl md:leading-46px">
                      <Link
                        href="/blog-post"
                        className="font-black text-secondary hover:underline"
                        title="    Want to learn JavaScript in 2022?">
                        Want to learn JavaScript in 2022?
                      </Link>
                    </h2>
                    <p>
                      This is a walk-through of the steps I personally took in a single year, to
                      begin learning JavaScript. My goal was to be able to get a job in a position
                      where Javascript would be at the forefront of what I do on a daily basis...
                    </p>
                  </div>
                  <div className={clsx(styles['article-footer'])}>
                    <ul className="article-footer-info mb-5 flex items-center md:mb-0">
                      <li>
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="7 Response">
                          7 Response
                        </Link>
                      </li>
                      <li className="ml-5.5">
                        <Link
                          href="/blog-post"
                          className="flex items-center text-primary transition-colors duration-200 hover:text-secondary"
                          title="1221">
                          <i className="pe-7s-like mr-3 text-4xl text-secondary"></i>
                          1221
                        </Link>
                      </li>
                    </ul>
                    <Link href="/blog-post" className="btn" title="Read more">
                      Read more
                    </Link>
                  </div>
                </article>

                <Pagination />
              </section>
            </div>
            <div className="col-span-3 flex-wrap md:flex lg:col-span-1 lg:block lg:flex-nowrap">
              <section
                className={clsx(styles['side-section'], 'mt-7.5 pt-45px text-center lg:mt-0')}>
                {avatar && (
                  <Image
                    {...avatar}
                    className="mx-auto mb-1"
                    alt="Profile picture"
                    placeholder="blur"
                    width={100}
                    height={100}
                  />
                )}
                <span className="author-info">Front-End Developer</span>
                <div className="author-social mt-1 mb-27px flex items-center justify-center">
                  {social.length &&
                    social.map((item, index) => (
                      <SocialMedia
                        key={index}
                        href={item.href}
                        icon={item.icon}
                        title={item.title}
                      />
                    ))}
                </div>
                <ul className="author-nav text-left">
                  <li>
                    <Link
                      className="author-nav-link"
                      href="/CV_Nguyen_Huu_Trung_Frontend_Developer.pdf"
                      target="_blank"
                      title="My CV">
                      <FiBookmark size={24} className="mr-3" />
                      Preview my CV
                    </Link>
                  </li>
                  <li>
                    <Link className="author-nav-link" href="/contact" title="Contact me">
                      <FiSend size={24} className="mr-3" />
                      Write message
                    </Link>
                  </li>
                </ul>
              </section>

              <section className={clsx(styles['side-section'], 'categories mt-7.5')}>
                <h2 className={clsx(styles['side-section-title'])}>Categories</h2>
                <ul>
                  <li className="relative">
                    <Link
                      className={clsx(styles['category-link'], 'after:bg-blueColor')}
                      href="#"
                      title="Blog other articles">
                      CSS
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      className={clsx(styles['category-link'], 'after:bg-redColor')}
                      href="#"
                      title="Blog other articles">
                      HTML
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      className={clsx(styles['category-link'], 'after:bg-yellowColor')}
                      href="#"
                      title="Blog other articles">
                      Javascript
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      className={clsx(styles['category-link'], 'after:bg-greenColor')}
                      href="#"
                      title="Blog other articles">
                      Graphic
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      className={clsx(styles['category-link'])}
                      href="#"
                      title="Blog other articles">
                      Other
                    </Link>
                  </li>
                </ul>
              </section>
              <section className={clsx(styles['side-section'], 'last-project mt-7.5')}>
                <h2 className={clsx(styles['side-section-title'])}>Last Project</h2>
                <div className="last-project-one p-29px">
                  <h3 className="mb-3px text-15px font-normal text-secondary">
                    <Link href="#">Microsoft TypeScript</Link>
                  </h3>
                  <time className="text-[12px] text-primary" dateTime="2022-12-31T23:59:59Z">
                    January 18, 2022
                  </time>
                  <p className="mt-2.5 mb-4 text-[13px] text-primary">
                    TypeScript starts from the same syntax and semantics that millions of JavaScript
                    developers know...{' '}
                  </p>
                  <Link href="#" title="Watch it" className="btn">
                    Watch it
                  </Link>
                </div>
              </section>
              <section className={clsx(styles['side-section'], 'tags mt-7.5')}>
                <h2 className={clsx(styles['side-section-title'])}>Tags</h2>
                <ul className="tags-content px-29px pt-29px pb-5.5">
                  <li className={clsx(styles['badge'])}>
                    <Link href="#" className={clsx(styles['badge-link'])}>
                      graphic
                    </Link>
                  </li>
                  <li className={clsx(styles['badge'])}>
                    <Link href="#" className={clsx(styles['badge-link'])}>
                      angular2
                    </Link>
                  </li>
                  <li className={clsx(styles['badge'])}>
                    <Link href="#" className={clsx(styles['badge-link'])}>
                      react
                    </Link>
                  </li>
                  <li className={clsx(styles['badge'])}>
                    <Link href="#" className={clsx(styles['badge-link'])}>
                      it
                    </Link>
                  </li>
                  <li className={clsx(styles['badge'])}>
                    <Link href="#" className={clsx(styles['badge-link'])}>
                      science
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
