import { useState } from "react";

import Flashcard from "./Flashcard";
import Data from "../Data.json";

// map over flashcard component, import json data here

const FlashcardList = () => {
  const [cards, setCards] = useState({ Data });
  return (
    <div>
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
