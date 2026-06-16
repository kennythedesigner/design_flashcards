import './App.css'
import { useState } from "react"
import cards from "./data"

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

      <div className="card" onClick ={handleFlip}>
        {isFlipped ? currentCard.answer : currentCard.question}
      </div>

      <button onClick={handleNext}>Next →</button>
    </div>
  )
}

export default App