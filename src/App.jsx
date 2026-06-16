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
    const randomIndex = Math.floor(Math.random() * cards.length)
    setCurrentIndex(randomIndex)
    setIsFlipped(false)
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
  onFlip={handleFlip}
  category={currentCard.category}
/>
      <button onClick={handleNext}>Next →</button>
    </div>
  )
}

export default App