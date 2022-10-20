import React, { useState } from 'react'

import { useLoginContext } from '../../states/exemplo1-context'

import { InputText, Button } from '../../components'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import * as s from './style'

function Login() {
  const [loading, setLoading] = useState<boolean>(false)
  const [, setLoginState, login] = useLoginContext()
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginScreen.IFormInput>()

  const onSubmit: SubmitHandler<LoginScreen.IFormInput> = (
    data: LoginScreen.IFormInput
  ) => {
    asyncLogin(data)
  }

  const asyncLogin = async (data: LoginScreen.IFormInput) => {
    setLoading(true)
    const response = await login()

    if (response) {
      setLoginState(data)
      setLoading(false)
      navigate('home')
    }
  }

  return (
    <s.LoginMain>
      <s.FormContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Controller
            name='email'
            control={control}
            rules={{
              required: true,
              pattern: new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
            }}
            render={({ field }) => (
              <InputText
                label='E-mail*'
                error={errors.email && true}
                {...field}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                label='Senha*'
                type='password'
                error={errors.password && true}
                {...field}
              />
            )}
          />
          <Button type='submit'>Entrar</Button>
        </form>
      </s.FormContent>
      {loading && <h3>LOADING ...</h3>}
    </s.LoginMain>
  )
}
// function Login() {
//   const [email, setEmail] = useState<string>('')
//   const [password, setPassword] = useState<string>('')

//   return (
//     <LoginMain>
//       <FormContent>
//         <h2>Login</h2>
//         <InputText
//           label='E-mail'
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           error={false}
//         />
//         <InputText
//           label='Senha'
//           type='password'
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           error={false}
//         />
//         <Button type='button'>Entrar</Button>
//       </FormContent>
//     </LoginMain>
//   )
// }

export default Login
