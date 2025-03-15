import FlashcardList from "./components/FlashcardList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Flashcards Study App</h1>
      <div className="flashcard-container">
        <FlashcardList />
      </div>
    </div>
  );
};

export default App;

