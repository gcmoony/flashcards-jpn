import { useState } from "react"
import Flashcard from "./Flashcard"
import "./styles.css"

export default function FlashcardSet({dataSet}) {
  const [isExpanded, setIsExpanded] = useState([]);

  function handleExpand(getSetId) {
    // console.log(getSetId);
    // Copy the current selected items into a new array
    let newArr = [...isExpanded];

    // Determine if the item clicked exists in array
    newArr.indexOf(getSetId) === -1 ? newArr.push(getSetId) : newArr.splice(newArr.indexOf(getSetId), 1);

    // Update state
    setIsExpanded(newArr);
  }


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
                <div className="title" onClick={() => handleExpand(dataSet.setName + "_" + aSet.charName)}>
                  <h4 className="set-title">{aSet.charName} <span className={isExpanded.indexOf(dataSet.setName + "_" + aSet.charName) !== -1 ? "selected" : ""}>👈</span></h4>
                </div>
                {
                  isExpanded.indexOf(dataSet.setName + "_" + aSet.charName) !== -1 ? 
                    <div className="cards">
                    {
                      aSet.data.map(characters => {
                        return <Flashcard cardData={characters} key={characters.id} />
                      })
                    }
                    </div> : ""
                }
                
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}