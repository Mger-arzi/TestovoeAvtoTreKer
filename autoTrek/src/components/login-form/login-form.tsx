import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { TextField } from '../ui/textField'
import { Button } from '../ui/button'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
})

export type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = handleSubmit(() => {
    console.log('sad');
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
      <TextField {...register('password')}
        label={'Password'}
        placeholder={'password'}
        name={'password'}
        errorMessage={errors?.password?.message}
      />
      <Button type={'submit'}>Submit</Button>
    </form >
  )
}
