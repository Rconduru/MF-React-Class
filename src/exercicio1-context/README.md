# Exercício Contexto

## Passo 1

Crie 3 componentes, sendo 1 pai e dois filhos.

## Passo 2

Faça o App.tsx chamar esse componente pai

## Passo 3

Crie um arquivo chamado TesteState.
Nele você deve criar um context de uma string

## Passo 4

Crie um provider e encapsule os componentes filhos

> Obs: "SeuContextoCriado.Provider"

## Passo 5

Por meio do useContext, acesse o valor de contexto nos dois componentes filhos

## Passo 6 (adv)

O componente pai de ter um o código abaixo:

```ts
const [value, setValue] = useState<string>('')
```

O valor do value deve ser passado para o provider

## Passo 7

O componente filho 1 deve receber como 'props' a função de 'setValue' do pai, e ter um botão para setar um novo valor

## Esperado

- Um filho com um botão de alterar valor;
- Ao clicar no botão;
- Os dois filhos terão o valor do contexto mudados;
