import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

const initialState: { itens: Contato[] } = {
  itens: [
    {
      id: 1,
      nome: 'Fulano de Tal',
      email: 'fulano@example.com',
      telefone: '(41) 12345-6789'
    },
    {
      id: 2,
      nome: 'Ciclano de Tal',
      email: 'ciclano@example.com',
      telefone: '(41) 98765-4321'
    },
    {
      id: 3,
      nome: 'Beltrano de Tal',
      email: 'beltrano@example.com',
      telefone: '(41) 98765-4321'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
