import Flashcard from "./Flashcard";

// map over flashcard component, import json data here

const FlashcardList = () => {
  return (
    <div>
      <h1>Outer FlashcardList component</h1>
      <Flashcard />
    </div>
  );
};

export default FlashcardList;
