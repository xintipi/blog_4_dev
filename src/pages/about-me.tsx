import clsx from 'clsx'
import { GetStaticPropsContext } from 'next'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import { i18n, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'
import { FiBookmark, FiSend } from 'react-icons/fi'
import { GrLinkedin } from 'react-icons/gr'

import SocialMedia from '@/components/UI/shared/SocialMedia'
import { social } from '@/data/social'
import usePathOrigin from '@/hooks/usePathOrigin'
import { ILanguageResponse } from '@/interface/about.interface'
import AppLayout from '@/layouts/AppLayout'
import { getLanguageList } from '@/services/api/aboutAPI'
import { AppStore, wrapper } from '@/store'
import styles from '@/styles/modules/AboutMe.module.scss'

// export async function getStaticPaths() {
//   const store = makeStore()
//   const result = await store.dispatch(getLanguageList.initiate())
// }

export const getStaticProps = wrapper.getStaticProps(
  (store: AppStore) => async (context: GetStaticPropsContext) => {
    try {
      const getLanguageListQueryResult = await store.dispatch(getLanguageList.initiate())
      const { data } = await getLanguageListQueryResult

      const images = await Promise.all(
        (data as ILanguageResponse[]).map(async (data) => {
          const { base64, img } = await getPlaiceholder(data.path_img)
          return { ...img, blurDataURL: base64 }
        })
      )

      const { base64, img } = await getPlaiceholder('/img/me/me1.jpg')

      const avatar = { ...img, blurDataURL: base64 }

      return {
        props: {
          avatar,
          images,
          data,
          ...(await serverSideTranslations(context.locale as string, [
            'header',
            'footer',
            'about',
          ])),
        },
      }
    } catch (_) {
      return {
        notFound: true,
      }
    }
  }
)

type AboutMeProps = {
  avatar: ImageLoaderProps
  images: ImageLoaderProps[]
  data: ILanguageResponse[]
}

export default function AboutMe({ avatar, images, data }: AboutMeProps) {
  const ogUrl = usePathOrigin()
  const { t } = useTranslation('about')

  return (
    <AppLayout
      title="About DEV"
      canonical={ogUrl}
      description="On this blog, you can see my overview, my cv and my profile, and besides, you can find various types of articles focusing on technology, from tutorials, and product comparisons, to opinions, and more."
      keywords="software development, engineering, javascript, vuejs, nuxtjs, reactjs, nextjs, blog, profile, cv, resume"
      openGraph={{
        type: 'website',
        siteName: 'About DEV',
        url: ogUrl,
        locale: i18n?.language === 'en' ? 'en_US' : 'vi_VN',
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <main className="mt-7.5">
        <div className="container mx-auto">
          <section className="flex flex-col bg-white shadow-block md:flex-row">
            <div className="about-me-author basis-34/100 border-r border-solid border-borderColor text-center lg:basis-27/100">
              <div className="flex items-center justify-center overflow-hidden py-25px">
                <Image
                  {...avatar}
                  className="rounded-full border border-solid border-borderColor"
                  alt="Profile picture"
                  placeholder="blur"
                  width={100}
                  height={100}
                />
              </div>
              <ul className="author-nav text-left">
                <li>
                  <Link
                    className="author-nav-link"
                    href="/CV_Nguyen_Huu_Trung_Frontend_Developer.pdf"
                    target="_blank"
                    title="My CV">
                    <FiBookmark size={24} className="mr-3" />
                    {t('about_preview_cv')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="author-nav-link border-b border-solid border-borderColor"
                    href="/contact"
                    title="Contact me">
                    <FiSend size={24} className="mr-3" />
                    {t('about_write_message')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="about-me-author-content relative basis-66/100 py-10 px-7.5 md:py-50px md:px-10 lg:basis-73/100">
              <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                <h1 className="h1 mb-2 flex w-full items-center font-black text-secondary">
                  {t('about_i_am')}
                  <a
                    href="https://tinyurl.com/3xneh8zm"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 hover:underline">
                    Xìn
                  </a>
                </h1>
                <div className="author-social flex items-center justify-center sm:w-full sm:justify-end">
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
              </div>
              <span className="mt-2 block text-15px text-primary">
                {t('about_role', { role: 'Front-End' })}
              </span>
              <p className="my-3 text-xl text-secondary">👨‍💻 {t('about_me')}:</p>
              <ul className="mb-3 list-disc pl-5">
                <li className="pb-2">🔭 {t('about_myself_1')}</li>
                <li className="pb-2">🌱 {t('about_myself_2')}</li>
                <li className="pb-2">⚡ {t('about_myself_3')}</li>
                <li className="inline-flex items-center pb-2">
                  📫 {t('about_reach_me')}:
                  <Link
                    href="https://tinyurl.com/3xneh8zm"
                    title="LinkedIn"
                    target="_blank"
                    className="pl-1">
                    <GrLinkedin size={19} className="text-linkedinColor" />
                  </Link>
                </li>
              </ul>
              <p className="my-3 text-xl text-secondary">🛠️ Languages:</p>
              <ul className="grid sm:grid-cols-4 sm:gap-y-3 md:grid-cols-8">
                {data.length &&
                  data.map((lang, index) => {
                    const image = images[index]
                    return (
                      <Link
                        key={lang?.id}
                        href={lang?.source_target as string}
                        target="_blank"
                        title={lang?.title as string}
                        rel="noopener noreferrer">
                        <Image
                          {...image}
                          alt={lang?.path_img as string}
                          width={40}
                          height={40}
                          placeholder="blur"
                        />
                      </Link>
                    )
                  })}
              </ul>
            </div>
          </section>
          <section className="details mt-7.5 flex grid gap-x-0 bg-white py-10 px-7.5 shadow-block md:grid-cols-2 md:py-50px md:px-11">
            <div className="philosophy basis-1/2 md:pr-5.5">
              <h2 className={clsx(styles['details-header'])}>Overview</h2>
              <div className={clsx(styles['philosophy-content'])}>
                <p className={clsx(styles['philosophy-content-text'])}>{t('about_overview_1')}</p>
                <p className={clsx(styles['philosophy-content-text'])}>{t('about_overview_2')}</p>
                <p
                  className={clsx({
                    [styles['philosophy-content-text']]: true,
                  })}>
                  {t('about_overview_3')}
                </p>
                <p className={clsx(styles['philosophy-content-text'])}>{t('about_overview_4')}</p>
                <p className={clsx(styles['philosophy-content-text'])}>
                  {t('about_location')}:{' '}
                  <span className="text-sm font-bold">Ho Chi Minh, Vietnam</span>
                </p>
              </div>
            </div>
            <div className="skills basis-1/2 md:pl-5.5">
              <h2 className={clsx(styles['details-header'])}>Skills</h2>
              <ol className="skills-list grid grid-cols-2">
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>01</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>HTML/CSS</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>02</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>Javascript</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>03</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>VueJS</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>04</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>NuxtJS</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>05</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>ReactJS</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>06</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>NextJS</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>07</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>Typescript</h3>
                  </div>
                </li>
                <li className="mb-7.5 flex items-center">
                  <span className={clsx(styles['skills-list-numbering'])}>08</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}> Gulp / Webpack / Vite</h3>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  )
}
