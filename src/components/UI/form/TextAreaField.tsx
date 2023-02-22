import { ChangeEvent, FocusEvent, forwardRef, ReactNode, Ref, TextareaHTMLAttributes } from 'react'

import { ErrorMessage } from '@/components/UI/form/ErrorMessage'
import { ValidationError } from '@/interface/validateError.interface'

type TextAreaInjectedProps = TextareaHTMLAttributes<any> & {
  id?: string
  ref?: Ref<any>
  className: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

type TextAreaFieldProps = TextareaHTMLAttributes<any> & {
  className?: string
  label?: ReactNode
  ref?: Ref<any>
  error?: ValidationError | string
  renderContainer?: (props: TextAreaInjectedProps) => JSX.Element
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextAreaField = forwardRef(
  (
    {
      id,
      name,
      label,
      rows,
      cols,
      placeholder,
      error,
      className,
      renderContainer = (props) => <textarea {...props} />,
      onBlur,
      onChange,
    }: TextAreaFieldProps,
    ref
  ) => {
    return (
      <>
        {label !== undefined ? <label htmlFor={id}>{label}</label> : null}
        {renderContainer({
          id,
          name,
          ref,
          rows,
          cols,
          placeholder,
          className: `form-control ${className}`,
          onBlur,
          onChange,
        })}
        <ErrorMessage error={error} />
      </>
    )
  }
)
