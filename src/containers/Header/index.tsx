import { ContatoInfo, Title } from './styles'
import { Input, MainContainer } from '../../styles'

const Header = () => {
  return (
    <MainContainer>
      <Title>Lista de Contatos</Title>
      <Input type="text" placeholder="Buscar..." />
      <ContatoInfo>3 contatos encontrados</ContatoInfo>
    </MainContainer>
  )
}

export default Header
