import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      label,
      labelProps,
      onChange,
      onValueChange,
      placeholder,
      ...restProps
    },
    ref
  ) => {



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }


    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, errorMessage && s.error, className),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label, labelProps?.className),
      root: clsx(s.root, containerProps?.className),
    }

    return (
      <div className={classNames.root}>
        {label && <label />}
        <div className={classNames.fieldContainer}>
          <input
            className={classNames.field}
            onChange={handleChange}
            placeholder={placeholder}
            ref={ref}
            {...restProps}
          />
        </div>
        {errorMessage && (
          <h5 className={classNames.error}>
            {errorMessage}
          </h5>
        )}
      </div>
    )
  }
)
