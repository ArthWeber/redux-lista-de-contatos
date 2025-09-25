import styled from 'styled-components'
import { Botao, Input } from '../../styles'
import vars from '../../styles/vars'

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr auto;
  align-items: center;
  gap: 1rem;
  background-color: ${vars.bgDark};
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${vars.fontLight};
  margin-top: 1rem;
`
export const InputEdit = styled(Input)`
  font-size: 0.75rem;
  margin: 0 auto;
  max-width: 15.5rem;
`

export const EditButton = styled(Botao)`
  border: 1px solid ${vars.fontNormal};
`
export const DeleteButton = styled(Botao)`
  border: 1px solid ${vars.redBorder};
`

export const SaveButton = styled(Botao)`
  border: 1px solid ${vars.greenBorder};
`
