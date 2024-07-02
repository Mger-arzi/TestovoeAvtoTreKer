import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/button'
import { TextField } from '../ui/textField'
import { FormTextField } from '../form/FormTextField'


export const passwordXXX = z.string().min(3).max(30)

export const loginSchema = z.object({
  email: z.string().email(),
  password: passwordXXX,
  rememberMe: z.boolean().optional(),
})

export type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      height: '400px',
      gap: '50px',
      margin: '0 auto',
      marginTop: '150px',
    }}>
      <TextField
        {...register('email')}
        errorMessage={errors?.email?.message}
        label={'Email'}
        placeholder={'email'}
      />
      <FormTextField control={control} label={'Password'} name={'password'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
