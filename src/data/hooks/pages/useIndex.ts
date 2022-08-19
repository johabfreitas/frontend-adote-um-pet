import { useState } from 'react';
import { Pet } from '../../@types/Pet';

export function UseIndex() {
    const [listaPets, setListaPets] = useState(
        [
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
          ]
    ),
          [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);
    return {
        listaPets,
        petSelecionado,
        setPetSelecionado
    };
}