import NovoContato from '../../components/NovoContato'
import Header from '../../containers/Header'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => {
  return (
    <>
      <Header />
      <ListaDeContatos />
      <NovoContato />
    </>
  )
}

export default Home
