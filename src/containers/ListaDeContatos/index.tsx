import { useSelector } from 'react-redux'
import Contatos from '../../components/Contatos'

import { RootState } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootState) => state.contatos)
  return (
    <ul>
      {itens.map((c) => (
        <li key={c.id}>
          <Contatos
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
