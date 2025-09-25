import styled from 'styled-components'
import { Botao } from '../../styles'
import vars from '../../styles/vars'

export const ListaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${vars.bgDark};
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${vars.fontLight};
  margin-top: 2rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`
export const EditButton = styled(Botao)`
  border: 1px solid ${vars.fontNormal};
`
export const DeleteButton = styled(Botao)`
  border: 1px solid ${vars.redBorder};
`
