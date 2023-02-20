import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Tooltip } from 'react-tippy'

import Counter from '@/components/UI/shared/Counter'
import { languages } from '@/data/languages'
import usePathOrigin from '@/hooks/usePathOrigin'
import AppLayout from '@/layouts/AppLayout'
import styles from '@/styles/modules/AboutMe.module.scss'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer', 'about'])),
    },
  }
}

export default function AboutMe() {
  const ogUrl = usePathOrigin()
  const { t } = useTranslation('about')

  return (
    <AppLayout
      title="About DEV"
      canonical={ogUrl}
      description="About DEV — DEV Blog 👩‍💻👨‍💻"
      keywords="software development, engineering, rails, javascript, ruby"
      openGraph={{
        type: 'website',
        siteName: process.env.NEXT_PUBLIC_APP_NAME,
        url: ogUrl,
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <main className="mt-7.5">
        <div className="container mx-auto">
          <section className="flex flex-col bg-white shadow-block md:flex-row">
            <div className="about-me-author basis-34/100 border-r border-solid border-borderColor text-center lg:basis-27/100">
              <div className="flex items-center justify-center overflow-hidden py-25px">
                <Image
                  className="rounded-full border border-solid border-borderColor"
                  src="/img/me/me1.jpg"
                  alt="Profile picture"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </div>
              <ul className="author-nav text-left">
                <li>
                  <Link
                    className={clsx(styles['author-nav-link'])}
                    href="/cv/CV_Nguyen_Huu_Trung_Frontend_Developer.pdf"
                    target="_blank"
                    title="My CV">
                    <i className="pe-7s-bookmarks mr-3 text-3xl"></i>
                    {t('about_preview_cv')}
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx({
                      'border-b border-solid border-borderColor': true,
                      [styles['author-nav-link']]: true,
                    })}
                    href="/contact"
                    title="">
                    <i className="pe-7s-paper-plane mr-3 text-3xl"></i>
                    {t('about_write_message')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="about-me-author-content relative basis-66/100 py-10 px-7.5 md:py-50px md:px-10 lg:basis-73/100">
              <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                <h1 className="h1 mb-2 font-black text-secondary">
                  I'am{' '}
                  <a
                    href="https://tinyurl.com/3xneh8zm"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blueColor">
                    Xìn
                  </a>
                </h1>
                <div className="author-social mb-2 flex items-center justify-center md:mb-0">
                  <Link
                    href="https://tinyurl.com/yc2ekzfd"
                    className="social-icon"
                    title="Facebook"
                    target="_blank">
                    <Tooltip title="Facebook" trigger="mouseenter" theme="light">
                      <FontAwesomeIcon icon={faFacebook} width={18} />
                    </Tooltip>
                  </Link>
                  <Link
                    href="https://tinyurl.com/yx9dy849"
                    className="social-icon"
                    title="Github"
                    target="_blank">
                    <Tooltip title="Github" trigger="mouseenter" theme="light">
                      <FontAwesomeIcon icon={faGithub} width={18} />
                    </Tooltip>
                  </Link>
                  <Link
                    href="https://tinyurl.com/3xneh8zm"
                    className="social-icon"
                    title="LinkedIn"
                    target="_blank">
                    <Tooltip title="Linkedin" trigger="mouseenter" theme="light">
                      <FontAwesomeIcon icon={faLinkedin} width={18} />
                    </Tooltip>
                  </Link>
                </div>
              </div>
              <span className="mt-2 block text-15px text-primary">
                Front-End Developer at Gumi Company
              </span>
              <p className="my-3 text-xl text-secondary">👨‍💻 About Me :</p>
              <ul className="mb-3 list-disc pl-5">
                <li className="pb-2">
                  🔭 I’m working as a Software Engineer and contributing to frontend for building
                  web applications.
                </li>
                <li className="pb-2">
                  🌱 I'm interesting websites that amazed my users as well as delivering them in
                  high quality.
                </li>
                <li className="pb-2">
                  ⚡ My goal is to improve my skill to make high quality websites and now I'm
                  working with my dream and make it bigger.
                </li>
                <li className="pb-2">
                  📫How to reach me:{' '}
                  <Link href="https://tinyurl.com/3xneh8zm" title="LinkedIn" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} width={18} />
                  </Link>
                </li>
              </ul>
              <p className="my-3 text-xl text-secondary">👨🛠️ Languages and Tools :</p>
              <ul className="grid sm:grid-cols-4 sm:gap-y-3 md:grid-cols-8">
                {languages.map((lang, index) => {
                  return (
                    <Link
                      key={index}
                      href={lang.sourceTarget}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image
                        src={lang.pathImg}
                        title={lang.title}
                        alt={lang.title}
                        width="40"
                        height="40"
                        style={{ maxWidth: '100%' }}
                      />
                    </Link>
                  )
                })}
              </ul>
            </div>
          </section>
          <section className="details mt-7.5 flex grid grid-cols-2 flex-col gap-x-0 bg-white py-10 px-7.5 shadow-block md:py-50px md:px-11">
            <div className="philosophy basis-1/2 md:pr-5.5">
              <h2 className={clsx(styles['details-header'])}>Overview</h2>
              <div className={clsx(styles['philosophy-content'])}>
                <p
                  className={clsx({
                    'font-secondary': true,
                    [styles['philosophy-content-text']]: true,
                  })}>
                  Have five years of experience in programming with good communication and quick
                  learning skills. Strong proficiency in JavaScript including DOM manipulation and
                  the JavaScript object model
                </p>
                <p
                  className={clsx({
                    'font-secondary': true,
                    [styles['philosophy-content-text']]: true,
                  })}>
                  Familiarity with newer specifications of EcmaScript and Typescript Experience with
                  popular <span className="text-secondary">VueJS</span> workflows such as vuex,
                  pinia, vee-validate, i18n, etc.
                </p>
                <p
                  className={clsx({
                    'font-secondary': true,
                    [styles['philosophy-content-text']]: true,
                  })}>
                  Experience with <span className="text-secondary">ReactJS</span> workflows such as
                  redux, hooks, formik, i18n. Experience with UI components such as ant design,
                  element UI, tailwind, etc.
                </p>
                <p
                  className={clsx({
                    'font-secondary': true,
                    [styles['philosophy-content-text']]: true,
                  })}>
                  Proficient use of source code management tools (sourcetree, git). Ability to build
                  source code using webpack, vite, gulp
                </p>
                <p
                  className={clsx({
                    'font-secondary': true,
                    [styles['philosophy-content-text']]: true,
                  })}>
                  Current working location:{' '}
                  <span className="text-secondary">Ho Chi Minh, Vietnam</span>
                </p>
              </div>
            </div>
            <div className="skills basis-1/2 md:pl-5.5">
              <h2 className={clsx(styles['details-header'])}>Skills</h2>
              <ol className="skills-list">
                <li className="mb-7.5 flex items-start">
                  <span className={clsx(styles['skills-list-numbering'])}>01</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>HTML/CSS</h3>
                    <p
                      className={clsx({
                        'font-secondary': true,
                        [styles['skills-list-content']]: true,
                      })}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                  </div>
                </li>
                <li className="mb-7.5 flex items-start">
                  <span className={clsx(styles['skills-list-numbering'])}>02</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>Javascript</h3>
                    <p
                      className={clsx({
                        'font-secondary': true,
                        [styles['skills-list-content']]: true,
                      })}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                  </div>
                </li>
                <li className="mb-7.5 flex items-start">
                  <span className={clsx(styles['skills-list-numbering'])}>03</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>VueJS/NuxtJS</h3>
                    <p
                      className={clsx({
                        'font-secondary': true,
                        [styles['skills-list-content']]: true,
                      })}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                  </div>
                </li>
                <li className="mb-7.5 flex items-start">
                  <span className={clsx(styles['skills-list-numbering'])}>04</span>
                  <div className={clsx(styles['skills-right'])}>
                    <h3 className={clsx(styles['skills-list-titles'])}>ReactJS/NextJS</h3>
                    <p
                      className={clsx({
                        'font-secondary': true,
                        [styles['skills-list-content']]: true,
                      })}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          <section className="counters mt-7.5 bg-white py-50px px-11 shadow-block sm:grid sm:grid-cols-2 sm:gap-2 md:grid md:grid-cols-4 md:gap-4">
            <Counter
              icon={<i className="pe-7s-cart" />}
              target={200}
              body={t('about_product_slaes')}
            />
            <Counter
              icon={<i className="pe-7s-news-paper" />}
              target={200}
              body={t('about_lines_code')}
            />
            <Counter
              icon={<i className="pe-7s-photo" />}
              target={200}
              body={t('about_taking_photo')}
            />
            <Counter
              icon={<i className="pe-7s-tools" />}
              target={200}
              body={t('about_bug_fixed')}
            />
          </section>
        </div>
      </main>
    </AppLayout>
  )
}
