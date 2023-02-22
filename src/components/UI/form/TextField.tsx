import { ChangeEvent, FocusEvent, forwardRef, ReactNode, Ref } from 'react'

import { ErrorMessage } from '@/components/UI/form/ErrorMessage'
import { ValidationError } from '@/interface/validateError.interface'

interface InputInjectedProps {
  id?: string
  name?: string
  type?: string
  placeholder?: string
  ref?: Ref<any>
  className: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface TextFieldProps {
  id?: string
  name?: string
  className?: string
  label?: ReactNode
  placeholder?: string
  ref?: Ref<any>
  error?: ValidationError | string
  renderContainer?: (props: InputInjectedProps) => JSX.Element
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextField = forwardRef(
  (
    {
      id,
      name,
      label,
      error,
      placeholder,
      className,
      renderContainer = (props) => <input {...props} />,
      onBlur,
      onChange,
    }: TextFieldProps,
    ref
  ) => {
    return (
      <>
        {label !== undefined ? <label htmlFor={id}>{label}</label> : null}
        {renderContainer({
          id,
          name,
          type: 'text',
          ref,
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
