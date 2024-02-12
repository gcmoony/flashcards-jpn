import "./styles.css";
import data from "./JPN_Characters";
import FlashcardSet from "./FlashcardSet";

export default function Flashcards() {

  return (
    <div className="wrapper">
      <div className="flashcard-container">
        {data && data.length > 0 ? 
          data.map((dataSet, key) => {
            return <FlashcardSet dataSet={dataSet} key={key}/>
          })
          : "No data found"}
      </div>
    </div>
  )
}