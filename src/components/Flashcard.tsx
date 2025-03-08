import { useState } from "react";
import "./Flashcard.css";

interface FlashcardProps {
  card: {
    question: string;
    answer: string;
    image?: string; // Optional image field
  };
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <p>{flipped ? card.answer : card.question}</p>
      {card.image && <img src={card.image} alt="Flashcard" className="flashcard-image" />}
    </div>
  );
};

export default Flashcard;

