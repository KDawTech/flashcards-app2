import { useState } from "react";
import "./Flashcard.css";

interface FlashcardProps {
  card: {
    question: string;
    answer: string;
    image?: string;
  };
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const checkAnswer = () => {
    if (userInput.toLowerCase().trim() === card.answer.toLowerCase().trim()) {
      setFeedback(" Correct!");
    } else {
      setFeedback(` Incorrect! The correct answer is: ${card.answer}`);
    }
  };

  return (
    <div className="flashcard">
      <p>{flipped ? card.answer : card.question}</p>
      {card.image && <img src={card.image} alt="Flashcard" className="flashcard-image" />}

      {!flipped && (
        <>
          <input
            type="text"
            placeholder="Enter your answer"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="input-box"
          />
          <button onClick={checkAnswer} className="submit-button">Submit</button>
          {feedback && <p className="feedback">{feedback}</p>}
        </>
      )}

      <button onClick={() => setFlipped(!flipped)} className="flip-button">
        {flipped ? "Flip Back" : "Flip"}
      </button>
    </div>
  );
};

export default Flashcard;


