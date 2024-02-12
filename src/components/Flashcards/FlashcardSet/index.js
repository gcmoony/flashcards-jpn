import Flashcard from "./Flashcard"
import "./styles.css"

export default function FlashcardSet({dataSet}) {
  return (
    <div className="set">
      <div className="title">
        <h3>{dataSet.setName.charAt(0).toUpperCase() + dataSet.setName.slice(1)}</h3>
      </div>

      <div className="categories">
        {
          dataSet.characterSet.map((aSet, key) => {
            return (
              <div key={key} className="letter-set">
                <div className="title">
                  <h4>{aSet.charName}</h4>
                </div>
                <div className="cards">
                  {
                    aSet.data.map(characters => {
                      return <Flashcard cardData={characters} key={characters.id} />
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}