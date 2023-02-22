import React from 'react'
import { useTranslation } from 'react-i18next'

import { ValidationError } from '@/interface/validateError.interface'

export interface ErrorMessageProps {
  error?: ValidationError | string
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const { t, i18n } = useTranslation('translation')
  console.log(i18n.language)

  if (error === undefined) {
    return null
  } else if (typeof error === 'string') {
    return <div className="error-text">{error}</div>
  } else {
    const { key, values } = error
    return <div className="error-text">{t(key, { field: t(values?.label), ...values })}</div>
  }
}
