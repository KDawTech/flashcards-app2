import { useState } from "react";
import Flashcard from "./Flashcard";

const flashcardsData = [
    { question: "What is 2 + 2?", answer: "4", image: "/math.jpeg" },
    { question: "What is the capital of France?", answer: "Paris", image: "/france.jpeg" },
    { question: "React is a library or framework?", answer: "Library", image: "/react.jpeg" },
  ];
  
  

const FlashcardList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcardsData.length);
    } while (newIndex === currentIndex);

    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <h2>Flashcard App</h2>
      <p>Total Cards: {flashcardsData.length}</p>
      <Flashcard card={flashcardsData[currentIndex]} />
      <button onClick={showRandomCard}>Next Card</button>
    </div>
  );
};

export default FlashcardList;
