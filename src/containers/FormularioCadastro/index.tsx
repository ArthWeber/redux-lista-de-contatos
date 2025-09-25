import { Input, MainContainer } from '../../styles'
import { SaveAction, Form, SaveButton } from './styles'

const CadastrarContato = () => {
  return (
    <MainContainer>
      <h2>Cadastrar Contato</h2>
      <Form>
        <Input type="text" name="nome" placeholder="Nome" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="tel" name="telefone" placeholder="Telefone" />
      </Form>
      <SaveAction>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </SaveAction>
    </MainContainer>
  )
}

export default CadastrarContato
