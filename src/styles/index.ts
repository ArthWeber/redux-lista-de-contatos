import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;}

  body {
    background-color: ${vars.bgDefault};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
export const MainContainer = styled.header`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 8px;
`

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${vars.bgDark};
  color: ${vars.fontDark};
  border-radius: 4px;
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;

  &::placeholder {
    color: ${vars.fontDark};
  }

  &:focus {
    outline: none;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const Botao = styled.button`
  padding: 8px 12px;
  background-color: ${vars.bgDark};
  color: ${vars.fontLight};
  border-radius: 0.5rem;
  cursor: pointer;
`
export default EstiloGlobal
