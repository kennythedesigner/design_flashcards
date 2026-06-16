function Card ({ question, answer, isFlipped, onFlip , category }) {
  return (

    <div className={`card  ${category}`} onClick={onFlip}>
      
      <p className="category">{category}</p>
      {isFlipped ? answer : question}
    </div>
  );
}
export default Card;