import * as React from 'react'
import * as s from './style'

// Desestruturando o 'props'
export default function Input({
  label = 'Label',
  error = false,
  ...rest
}: InputComponent.IInputProps) {
  // ### Formas de retornar vários componentes
  // return [<label>{label}:</label>, <input {...rest} />]
  // return (
  //   <>
  //     <label>{label}:</label>
  //     <input {...rest} />
  //   </>
  // )
  // return (
  //   <s.InputWrapper>
  //     <label>{label}:</label>
  //     <s.InputStyled {...rest} />
  //   </s.InputWrapper>
  // )
  return (
    <s.InputWrapperF2 error={error}>
      <label>{label}:</label>
      <input {...rest} />
    </s.InputWrapperF2>
  )
}
