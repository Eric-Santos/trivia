import { useState } from "react";

import "../styles/flashcardList.css";
import Flashcard from "./Flashcard";
import Data from "../Data.json";

//json data on state
const FlashcardList = () => {
  //removed setCards to clear consoleg warnings
  const [cards] = useState({ Data });
  return (
    <div className="cardlist">
      {/* map over flashcard component, with state */}
      {cards.Data.map((post) => {
        return (
          <Flashcard
            key={post.id}
            question={post.question}
            incorrect={post.incorrect}
            correct={post.correct}
          />
        );
      })}
    </div>
  );
};

export default FlashcardList;
