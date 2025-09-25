import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vars from '../../styles/vars'

export const Voltar = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${vars.bgDark};
  color: ${vars.fontLight};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
