import styled from 'styled-components'
import vars from '../../styles/vars'
import { Botao, ActionsContainer } from '../../styles'

export const Titulo = styled.h2`
  font-size: 2rem;
  color: ${vars.fontDark};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
export const SaveAction = styled(ActionsContainer)`
  display: flex;
  justify-content: flex-end;
`

export const SaveButton = styled(Botao)`
  border: 1px solid ${vars.greenBorder};
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`
