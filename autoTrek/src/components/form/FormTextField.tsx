import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '../ui/textField'


type Props<T extends FieldValues> = Omit<TextFieldProps, ' placeholder' | 'errorMessage'> &
  UseControllerProps<T>

export const FormTextField = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: Props<T>) => {
  const {
    fieldState: { error },
    field: { onChange },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  console.log(error)

  return (
    <TextField
      {...restProps}
      errorMessage={error?.message}
      placeholder={'password '}
      type={'password'}
      name={name}
      onChange={onChange}
    />
  )
}
