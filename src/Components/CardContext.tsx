import { createContext, useEffect, useState } from "react";

export interface ICard {
  id: number;
  title: string;
  description: string;
  status: string;
}

type CardContextType = {
  cards: ICard[] | null;
  saveCard: (card: ICard) => void;
};

interface prop {
  children: React.ReactNode;
}

export const cardContext = createContext<CardContextType | null>(null);

export default function CardContextProvider({ children }: prop) {
  const [cards, setCards] = useState<ICard[] | null>(null);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || '"');

    console.log(items);

    if (items) {
      setCards(items);
    }
  }, []);

  function saveCard(card: ICard) {
    if (cards) {
      setCards([...cards, card]);
    } else setCards([card]);
  }

  return (
    <cardContext.Provider value={{ cards, saveCard }}>
      {children}
    </cardContext.Provider>
  );
}
