declare namespace InputComponent {
  interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
    label?: string
    error?: boolean
  }

  interface IPropsInputLabel {
    error: boolean
  }
}
