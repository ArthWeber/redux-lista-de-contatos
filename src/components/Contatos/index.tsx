import * as S from './styles'

const Contatos = () => {
  return (
    <S.ListaContainer>
      <p>Elio Julio Cezar Weber</p>
      <p>elio.julio.cezar.weber@example.com</p>
      <p>(41) 98765-4321</p>
      <S.Actions>
        <S.EditButton>Editar</S.EditButton>
        <S.DeleteButton>Excluir</S.DeleteButton>
      </S.Actions>
    </S.ListaContainer>
  )
}

export default Contatos
