import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';


const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
      <span>
         Com um pequeno valor mensal, você <br/> pode <strong>adotar um pet virtualmente</strong>  
      </span>
      } />

      <Lista 
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'fkddkfoodfmkfmdfdkfldkfsdlkfdlf',
            foto: 'https://petepop.ig.com.br/wp-content/uploads/2020/12/david-clarke-0h3Emf2YLKg-unsplash.jpg'
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: 'fkddkfoodfmkfmdfdkfldkfsdlkfdlf',
            foto: 'https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg'
          },
        ]}
      />
    </div>
  )
}

export default Home
