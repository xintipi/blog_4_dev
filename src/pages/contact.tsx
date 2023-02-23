import clsx from 'clsx'
import { GetStaticPropsContext } from 'next'
import { i18n, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { GrSkype } from 'react-icons/gr'

import ContactForm from '@/components/Contact/ContactForm'
import usePathOrigin from '@/hooks/usePathOrigin'
import AppLayout from '@/layouts/AppLayout'
import styles from '@/styles/modules/Contact.module.scss'

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'header',
        'footer',
        'contact',
        'translation',
      ])),
    },
  }
}

export default function Contact() {
  const { t } = useTranslation('contact')
  const ogUrl = usePathOrigin()

  return (
    <AppLayout
      title="Contact DEV"
      canonical={ogUrl}
      description="Contact with me if you want to hire me, in addition to learn various technologies"
      keywords="software development, engineering, javascript, vuejs, nuxtjs, reactjs, nextjs"
      openGraph={{
        type: 'website',
        siteName: 'Contact DEV',
        url: ogUrl,
        locale: i18n?.language === 'en' ? 'en_US' : 'vi_VN',
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
                        href="mailto:huutrung.mmt@gmail.com"
                        title="huutrung.mmt@gmail.com">
                        Nguyen Huu Trung
                      </a>
                      <span className="block">Email</span>
                    </div>
                  </li>
                  <li className="my-6 flex items-center">
                    <div className="icon mr-6">
                      <GrSkype size={26} />
                    </div>
                    <div className={clsx(styles['contact-info'])}>
                      <a
                        className={clsx(styles['font-secondary'])}
                        href="skype:huutrung.mmt?chat"
                        title="live:huutrung.mmt_1">
                        Nguyen Huu Trung
                      </a>
                      <span className="block">{t('contact_skype')}</span>
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
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  )
}
