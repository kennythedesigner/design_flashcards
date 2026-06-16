function Card ({ question, answer, isFlipped, onFlip }) {
  return (

    <div className="card" onClick={onFlip}>
      {isFlipped ? answer : question}
    </div>
  );
}
export default Card;