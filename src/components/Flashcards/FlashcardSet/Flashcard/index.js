import { useState } from "react"
import "./styles.css"

export default function Flashcard({cardData}) {
  const [facing, setFacing] = useState("up");

  function flipCard(aCard) {
    facing === "up" ? setFacing("down") : setFacing("up");
  }

  return (
    <div className={`card `} onClick={(e) => flipCard(e.target)}>
      <div className={`front ${facing === "up" ? "" : "hidden"}`}>
        {cardData.character_jp}
      </div>
      <div className={`back ${facing === "down" ? "" : "hidden"}`}>
      {cardData.character_en}
      </div>
    </div>
  )
}