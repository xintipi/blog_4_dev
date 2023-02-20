import clsx from 'clsx'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

import usePathOrigin from '@/hooks/usePathOrigin'
import AppLayout from '@/layouts/AppLayout'
import styles from '@/styles/modules/Contact.module.scss'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer', 'contact'])),
    },
  }
}

export default function Contact() {
  const { t } = useTranslation('contact')
  const ogUrl = usePathOrigin()
  return (
    <AppLayout
      title="Contact DEV 👩‍💻👨‍💻"
      canonical={ogUrl}
      description="Contact DEV — DEV Blog 👩‍💻👨‍💻"
      keywords="software development, engineering, rails, javascript, ruby"
      openGraph={{
        type: 'website',
        siteName: process.env.NEXT_PUBLIC_APP_NAME,
        url: ogUrl,
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <main className="mt-10">
        <div className="container mx-auto">
          <section className="contact mt-7.5 bg-white py-10 px-7.5 shadow-block md:py-50px md:px-11">
            <div className="grid grid-cols-4 gap-x-0 lg:grid-cols-3 lg:gap-x-11">
              <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h2 className="mb-9 text-24px font-black leading-8 text-secondary">
                  {t('contact_touch_me')}
                </h2>
                <ul>
                  <li className="mb-6 flex items-center">
                    <div className="icon mr-6">
                      <FiMail size={26} />
                    </div>
                    <div className={clsx(styles['contact-info'])}>
                      <a
                        className={clsx(styles['font-secondary'])}
                        href="mailto: huutrung.mmt@gmail.com">
                        huutrung.mmt@gmail.com
                      </a>
                      <span className="block">{t('contact_email')}</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center">
                    <div className="icon mr-6">
                      <FiPhone size={26} />
                    </div>
                    <div className={clsx(styles['contact-info'])}>
                      <a className={clsx(styles['font-secondary'])} href="tel:+84-986-607-599">
                        +84 986 607 599
                      </a>
                      <span className="block">{t('contact_phone')}</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center">
                    <div className="icon mr-6">
                      <FiMapPin size={26} />
                    </div>
                    <div className={clsx(styles['contact-info'])}>
                      <p className={clsx(styles['font-secondary'])}>Ho Chi Minh city</p>
                      <span className="block">{t('contact_adress')}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-span-4 md:col-span-2 lg:pl-12">
                <h2 className="mb-9 text-24px font-black leading-8 text-secondary">
                  {t('contact_get_in_touch')}
                </h2>
                <p className="font-primary mt-2.5 mb-4">{t('contact_reference')}</p>
                <form className="contact-form">
                  <div className="mb-5.5 grid gap-x-0 md:grid-cols-2 md:gap-x-4">
                    <input
                      className="form-control col-span-1"
                      type="text"
                      placeholder={t<string>('contact_name')}
                      name="name"
                    />
                    <input
                      className="form-control col-span-1"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <textarea
                    className="form-control mb-11"
                    rows={6}
                    placeholder={t<string>('contact_question')}
                    name="question"
                  />
                  <button type="button" className="btn relative pl-16">
                    <FiSend size={20} className="absolute top-[11px] left-5" />
                    {t('contact_send')}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  )
}
