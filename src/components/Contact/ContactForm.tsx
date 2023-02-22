import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import { FiSend } from 'react-icons/fi'

import { TextAreaField } from '@/components/UI/form/TextAreaField'
import { TextField } from '@/components/UI/form/TextField'
import { ISendMailRequest } from '@/interface/contact.interface'
import yup from '@/lib/yup/yupLocale'
import { useProcessSendMailMutation } from '@/services/contactAPI'

const initValue = {
  contactInfo: { name: '', mail: '', question: '' },
}

export default function ContactForm() {
  const [processSendMail] = useProcessSendMailMutation()

  const { t } = useTranslation('contact')

  const contactInfoSchema = yup.object().shape({
    name: yup.string().label('text.name').required().min(2).max(32),
    mail: yup.string().label('text.email').required().email(),
    question: yup.string().label('text.question').required().max(255),
  })

  const schema = yup.object().shape({
    contactInfo: contactInfoSchema,
  })

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: initValue,
    resolver: yupResolver(schema),
  })

  const { register, handleSubmit, reset } = methods
  const { errors } = methods.formState

  const onSubmitSendmail = ({
    contactInfo: { name, mail, question },
  }: {
    contactInfo: ISendMailRequest
  }) => {
    processSendMail({ name, mail, question })
    reset(() => ({ ...initValue }))
  }

  return (
    <FormProvider {...methods}>
      <form className="contact-form" onSubmit={handleSubmit(onSubmitSendmail)}>
        <TextField
          {...register('contactInfo.name')}
          className="col-span-1"
          placeholder={t<string>('contact_name')}
          error={errors.contactInfo?.name?.message}
        />

        <TextField
          {...register('contactInfo.mail')}
          className="col-span-1"
          placeholder={t<string>('contact_email')}
          error={errors.contactInfo?.mail?.message}
        />

        <TextAreaField
          {...register('contactInfo.question')}
          className={`${!errors.contactInfo?.question?.message ? 'mb-11' : ''}`}
          placeholder={t<string>('contact_question')}
          rows={6}
          error={errors.contactInfo?.question?.message}
        />

        <button type="submit" className="btn relative pl-16" aria-label="send">
          <FiSend size={20} className="absolute top-[11px] left-5" />
          {t('contact_send')}
        </button>
      </form>
    </FormProvider>
  )
}
