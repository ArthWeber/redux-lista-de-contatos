import { configureStore } from '@reduxjs/toolkit'
import contatosSlice from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: contatosSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
