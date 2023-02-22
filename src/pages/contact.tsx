import clsx from 'clsx'
import { GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormEvent, useReducer } from 'react'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { GrSkype } from 'react-icons/gr'

import usePathOrigin from '@/hooks/usePathOrigin'
import { ISendMailRequest } from '@/interface/contact.interface'
import AppLayout from '@/layouts/AppLayout'
import { contactAPI, useProcessSendMailMutation } from '@/services/contactAPI'
import styles from '@/styles/modules/Contact.module.scss'

enum ChangedActionKind {
  CHANGED_NAME = 'CHANGED_NAME',
  CHANGED_MAIL = 'CHANGED_MAIL',
  CHANGED_QUESTION = 'CHANGED_QUESTION',
  CHANGED_RESET = 'CHANGED_RESET',
}

type ChangedNextAction = 'name' | 'mail' | 'question'

type ChangedAction = {
  type: ChangedActionKind
  payload?: Partial<Record<ChangedNextAction, string>>
}

type ChangedtState = ISendMailRequest

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer', 'contact'])),
    },
  }
}

const initialState: ChangedtState = { name: '', mail: '', question: '' }

function changedReducer(state: ChangedtState, action: ChangedAction) {
  switch (action.type) {
    case ChangedActionKind.CHANGED_NAME: {
      return {
        ...state,
        name: action.payload?.name,
      } as ChangedtState
    }
    case ChangedActionKind.CHANGED_MAIL: {
      return {
        ...state,
        mail: action.payload?.mail,
      } as ChangedtState
    }
    case ChangedActionKind.CHANGED_QUESTION: {
      return {
        ...state,
        question: action.payload?.question,
      } as ChangedtState
    }
    case ChangedActionKind.CHANGED_RESET: {
      return {
        ...initialState,
      }
    }
  }
}

export default function Contact() {
  const [state, dispatch] = useReducer(changedReducer, initialState)
  const { name, mail, question } = state

  const { t } = useTranslation('contact')
  const ogUrl = usePathOrigin()

  const [processSendMail] = useProcessSendMailMutation()

  const onSubmitSendmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    processSendMail({ name, mail, question }).abort()
    dispatch({ type: ChangedActionKind.CHANGED_RESET })
  }

  return (
    <AppLayout
      title="Contact DEV"
      canonical={ogUrl}
      description={`Contact DEV — ${process.env.NEXT_PUBLIC_APP_NAME}`}
      keywords="software development, engineering, rails, javascript, ruby"
      openGraph={{
        type: 'website',
        siteName: 'Contact DEV',
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
                        href="mailto:huutrung.mmt@gmail.com"
                        title="huutrung.mmt@gmail.com">
                        Nguyen Huu Trung
                      </a>
                      <span className="block">{t('contact_email')}</span>
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
                <form className="contact-form" onSubmit={onSubmitSendmail}>
                  <div className="mb-5.5 grid gap-x-0 md:grid-cols-2 md:gap-x-4">
                    <input
                      className="form-control col-span-1"
                      onChange={(event) =>
                        dispatch({
                          type: ChangedActionKind.CHANGED_NAME,
                          payload: { name: event.target.value },
                        })
                      }
                      value={name}
                      type="text"
                      placeholder={t<string>('contact_name')}
                      name="name"
                    />
                    <input
                      className="form-control col-span-1"
                      onChange={(event) =>
                        dispatch({
                          type: ChangedActionKind.CHANGED_MAIL,
                          payload: { mail: event.target.value },
                        })
                      }
                      value={mail}
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <textarea
                    className="form-control mb-11"
                    onChange={(event) =>
                      dispatch({
                        type: ChangedActionKind.CHANGED_QUESTION,
                        payload: { question: event.target.value },
                      })
                    }
                    value={question}
                    rows={6}
                    placeholder={t<string>('contact_question')}
                    name="question"
                  />
                  <button type="submit" className="btn relative pl-16" aria-label="send">
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
