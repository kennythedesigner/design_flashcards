import './App.css';
import { useState } from "react";
import cards from "./data";
import Card  from './Card';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [deck, setDeck] = useState(cards);
  const currentCard = deck[currentIndex]
  
  const [guess, setGuess] = useState("");
  
  const [feedback, setFeedback] = useState("")
  
  
  function handleFlip() {
    setIsFlipped(!isFlipped)
  }

  function handleNext() {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false)
    }
  }
  function handleBack () {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  }
  function handleShuffle() {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFeedback("");
    setGuess("");
  }
  function handleGuess() {
    const correct = currentCard.answer.toLowerCase();
    const userGuess = guess.toLowerCase();

    if (userGuess === correct) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  }

  return (
    <div>
      <h1>Design & UX Flashcards</h1>
      <p>Test your knowledge of UX and product design concepts.</p>
      <p>Total cards: {cards.length}</p>
      <Card
  question={currentCard.question}
  answer={currentCard.answer}
  isFlipped={isFlipped}
  onFlip={handleNext}
  category={currentCard.category}
/>
<div className={`feedback ${feedback}`}>
  {feedback === "correct" && "Correct!"}
  {feedback === "incorrect" && "Incorrect!"}
</div>
<div className='guess-box'>
  <input
    type="text"
    placeholder="Type your guess..."
    value={guess}
    onChange={(e) => setGuess(e.target.value)}
  />
  <button onClick={handleGuess}>Submit</button>
</div>
<div className="buttons">
      <button onClick={handleBack} disabled={currentIndex === 0}> ← Back </button>
      <button onClick={handleNext} disabled={currentIndex === deck.length -  1}> Next→ </button>
      <button onClick={handleShuffle}>🔀 Shuffle</button>
      </div>
    </div>
  )
}

export default App