import styled from 'styled-components'

// Forma 1
export const InputWrapper = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  height: 62px;
  justify-content: space-between;
`
export const InputStyled = styled.input`
  border: 1px solid gray;
  border-radius: 8px;
  height: 32px;
  padding: 0 8px;
`
// função recebendo que devolverá obrigatóriamente uma string
function nameColor(props: InputComponent.IPropsInputLabel): string {
  const { error } = props

  if (error) {
    return 'red'
  }

  return 'black'
}

// Forma 2
export const InputWrapperF2 = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  height: 62px;
  justify-content: space-between;

  label {
    font-weight: bolder;
    color: ${nameColor};
  }

  label {
    font-weight: bolder;
    color: ${({ error }: InputComponent.IPropsInputLabel) =>
      error ? 'red' : 'black'};
  }

  input {
    border: 1px solid gray;
    border-radius: 8px;
    height: 32px;
    padding: 0 8px;
  }
`
// Ternário == IF de uma linha
// condição ? caso seja true : caso seja false
// props.error ? 'red' : 'black'

// Styled Components --> Recebendo props
