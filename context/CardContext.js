import { deleteDoc } from 'firebase/firestore';
import { createContext, useContext, useState,useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';


const CardContext = createContext();

export function CardProvider({ children }) {
  const [cardsSalvos, setCardsSalvos] = useState([]);

  const adicionarCard = (novoTitulo, novaDescricao) => {
   const novoCard = {
      titulo: novoTitulo,
      descricao: novaDescricao,
      id: (Date.now()) 
    };
    setCardsSalvos([...cardsSalvos,novoCard])
  };
  const removerCard = (id) =>{
    setCardsSalvos(cardsSalvos.filter(card => card.id !== id));
    //await deleteDoc(doc(db,'cards'))
  }

  return (
    <CardContext.Provider value={{cardsSalvos,adicionarCard,removerCard }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  return useContext(CardContext);
}