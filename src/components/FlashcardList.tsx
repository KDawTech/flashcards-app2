import { useState } from "react";
import Flashcard from "./Flashcard";

const flashcardsData = [
  // Science
  { question: "What is the hardest natural substance on Earth?", answer: "Diamond", image: "/diamond.jpeg" },
  { question: "What is the chemical symbol for gold?", answer: "Au", image: "/gold.jpeg" },
  { question: "Which element has the atomic number 1?", answer: "Hydrogen", image: "/hydrogen.jpeg" },
  { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon Dioxide", image: "/co2.webp" },

  // Geography
  { question: "Which is the largest continent?", answer: "Asia", image: "/asia.png" },
  { question: "What is the capital of France?", answer: "Paris", image: "/france.jpeg" },
  { question: "What is the capital of Japan?", answer: "Tokyo", image: "/tokyo.svg" },
  { question: "Which country has the longest coastline?", answer: "Canada", image: "/canada.jpg" },

  // History
  { question: "What year did the Titanic sink?", answer: "1912", image: "/titanic.jpg" },
  { question: "Who was the first U.S. President?", answer: "George Washington", image: "/washington.jpg" },
  { question: "Which war ended in 1945?", answer: "World War II", image: "/ww2.jpg" },
  { question: "Who was the first person to walk on the moon?", answer: "Neil Armstrong", image: "/moonlanding.jpg" },

  // Art & Literature
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci", image: "/monalisa.jpg" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee", image: "/mockingbird.jpg" },
  { question: "Who is the author of '1984'?", answer: "George Orwell", image: "/orwell.jpg" },
  { question: "What is Shakespeare’s longest play?", answer: "Hamlet", image: "/hamlet.jpg" },

  // Pop Culture & Entertainment
  { question: "What year was the first Star Wars movie released?", answer: "1977", image: "/starwars.jpg" },
  { question: "Who is the main character in 'Breaking Bad'?", answer: "Walter White", image: "/breakingbad.jpg" },
  { question: "Which superhero is known as the 'Dark Knight'?", answer: "Batman", image: "/batman.jpg" },
  { question: "What is the highest-grossing movie of all time?", answer: "Avatar", image: "/avatar.jpg" },

  // Sports
  { question: "Which country won the 2022 FIFA World Cup?", answer: "Argentina", image: "/worldcup.jpg" },
  { question: "What is the regulation height of a basketball hoop?", answer: "10 feet (3.05 meters)", image: "/basketball.jpg" },
  { question: "How many players are there in a standard soccer team?", answer: "11", image: "/soccer.jpg" },
  { question: "Which sport is played at Wimbledon?", answer: "Tennis", image: "/tennis.jpg" },

  // Random Trivia
  { question: "How many bones are in the human body?", answer: "206", image: "/bones.jpeg" },
  { question: "What is the most spoken language in the world?", answer: "English", image: "/language.jpg" },
  { question: "Which company created the PlayStation?", answer: "Sony", image: "/playstation.jpg" }
];

  


const FlashcardList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const goNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };
const shuffleCards = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcardsData.length));
  };
  
  const goPreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2>Flashcard App</h2>
      <p>Total Cards: {flashcardsData.length}</p>
      <Flashcard card={flashcardsData[currentIndex]} />
      <div className="button-container">
        <button onClick={goPreviousCard} className="nav-button">Back</button>
        <button onClick={goNextCard} className="nav-button">Next</button>
        <button onClick={shuffleCards} className="nav-button">Shuffle</button>

      </div>
    </div>
  );
};

export default FlashcardList;

