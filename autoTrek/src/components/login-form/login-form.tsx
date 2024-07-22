import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { TextField } from '../ui/textField'
import { Button } from '../ui/button'
import { usePostAutoTrekMutation } from '../../api/services/autoTrek.service'
import { useNavigate } from 'react-router-dom'
import { FormTextField } from '../form/FormTextField'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
})

export type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const navigate = useNavigate()

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
  // const { data } = useLoginQuery()
  // const onSubmit = handleSubmit(() => {
  //   console.log(data);
  //   router.navigate('/')
  // })
  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   console.log(data); // Выводим объект с ошибками
  // router.navigate('/')
  const [login] = usePostAutoTrekMutation()
  const handleLogin = (data: FormValues) => {
    login(data)
      .unwrap()
      .finally(() => navigate('/'))
    console.log(data);
  }

  // console.log(useLoginQuery());
  // console.log(data);

  // const handleLogin = () => {
  //   data?
  //     .unwrap()
  //     .then(() => router.navigate('/'))
  // }
  return (
    <form onSubmit={handleSubmit(handleLogin)} style={{
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      height: '400px',
      gap: '50px',
      margin: '0 auto',
      marginTop: '150px',
    }}>
      <FormTextField control={control} name={'email'}

      />
      <TextField {...register('password')}
        label={'Password'}
        placeholder={'password'}
        name={'password'}
        errorMessage={errors?.password?.message}
      />
      <Button >Submit</Button>
    </form >
  )
}

