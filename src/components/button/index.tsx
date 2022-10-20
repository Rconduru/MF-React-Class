import * as React from 'react'
import { ButtonStyled } from './style'

export default function Button(props: ButtonComponent.IButtonProps) {
  const { children, ...rest } = props

  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}
