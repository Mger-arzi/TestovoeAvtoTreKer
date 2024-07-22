import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField } from '../ui/textField'


type Props<T extends FieldValues> = UseControllerProps<T>

export const FormTextField = <T extends FieldValues>({
  control,
  name,
}: Props<T>) => {
  const {
    field: { onChange },
  } = useController({ control, name })


  return (
    <TextField
      name={name}
      onChange={onChange}
    />
  )
}
