import React, { createContext, useContext, useState } from 'react'

// Contexto é um 1 valor indefinido (string, array ou um objeto) que contextualizado para
// todos os componentes que tem acesso ao provedor

// Provedor provê algum contexto definido anteriormente

// Para se utilizar valores de contexto no React, são necessário, basicamente, de doi malucos:
// 1 - Context
// 2 - Provider
// 3 - useContext

type TContext = [LoginScreen.IFormInput, (data: LoginScreen.IFormInput) => void]
type THookReturn = [
  LoginScreen.IFormInput,
  (data: LoginScreen.IFormInput) => void,
  () => Promise<boolean>
]

// Criar Contexto
// O contexto pode ser qualquer valor, de um valor simples como uma string
// a um objeto ou array
// Nesse exemplo estamos utilizando um array
const LoginContext = createContext<TContext>([
  {
    email: '',
    password: '',
  },
  (data: LoginScreen.IFormInput) => {
    console.log(data)
  },
])

// Componente que guarda estado e provê o contexto
const LoginContextProvider = ({ children }: React.PropsWithChildren) => {
  const [loginState, setLoginState] = useState<LoginScreen.IFormInput>({
    email: '',
    password: '',
  })

  const setState = (data: LoginScreen.IFormInput) => {
    setLoginState(data)
  }

  return (
    // Esse cara é o PROVIDER
    <LoginContext.Provider value={[loginState, setState]}>
      {children}
    </LoginContext.Provider>
  )
}

// Custom Hook Para Contexto
const useLoginContext = (): THookReturn => {
  const [loginState, setLoginState] = useContext(LoginContext)

  const servicoLogar = () =>
    new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })

  return [loginState, setLoginState, servicoLogar]
}

export { LoginContextProvider, useLoginContext }
