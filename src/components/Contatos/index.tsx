import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contatos'
import { ActionsContainer } from '../../styles'
import {
  DeleteButton,
  EditButton,
  ListaContainer,
  SaveButton,
  InputEdit
} from './styles'
import Contato from '../../models'
import { useState } from 'react'

type Props = Contato

const Contatos = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()

  const [editando, setEditando] = useState(false)
  const [contatoEdit, setContatoEdit] = useState({ nome, email, telefone })

  function cancelarEdicao() {
    setEditando(false)
    setContatoEdit({ nome, email, telefone })
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        ...contatoEdit
      })
    )
    setEditando(false)
  }

  return (
    <ListaContainer>
      {editando ? (
        <>
          <InputEdit
            placeholder="Nome"
            type="text"
            value={contatoEdit.nome}
            onChange={(e) =>
              setContatoEdit({ ...contatoEdit, nome: e.target.value })
            }
          />
          <InputEdit
            placeholder="Email"
            type="email"
            value={contatoEdit.email}
            onChange={(e) =>
              setContatoEdit({ ...contatoEdit, email: e.target.value })
            }
          />
          <InputEdit
            placeholder="Telefone"
            type="text"
            value={contatoEdit.telefone}
            onChange={(e) =>
              setContatoEdit({ ...contatoEdit, telefone: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <p>{nome}</p>
          <p>{email}</p>
          <p>{telefone}</p>
        </>
      )}

      <ActionsContainer>
        {editando ? (
          <>
            <SaveButton onClick={salvarEdicao}>Salvar</SaveButton>
            <DeleteButton onClick={cancelarEdicao}>Cancelar</DeleteButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => setEditando(true)}>Editar</EditButton>
            <DeleteButton onClick={() => dispatch(remover(id))}>
              Excluir
            </DeleteButton>
          </>
        )}
      </ActionsContainer>
    </ListaContainer>
  )
}

export default Contatos
