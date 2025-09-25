import { ContatoInfo, HeaderContainer, Title } from './styles'
import { Input } from '../../styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Lista de Contatos</Title>
      <Input type="text" placeholder="Buscar..." />
      <ContatoInfo>3 contatos encontrados</ContatoInfo>
    </HeaderContainer>
  )
}

export default Header
