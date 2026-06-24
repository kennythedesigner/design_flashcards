import './App.css';
import { useState } from "react";
import cards from "./data";
import Card  from './Card';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = cards[currentIndex]

  function handleFlip() {
    setIsFlipped(!isFlipped)
  }

  function handleNext() {
    if (currentIndex < cards.length - 1) {
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
<div className="buttons">


      <button onClick={handleBack} disabled={currentIndex === 0}> ← Back </button>
      <button onClick={handleNext} disabled={currentIndex === cards.length -  1}> Next→ </button>
      </div>
    </div>
  )
}

export default App