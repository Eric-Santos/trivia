import { useState } from "react";

import "../styles/flashcard.css";
import { Card } from "semantic-ui-react";

//deconstructed json data from state
const Flashcard = ({ question, incorrect, correct }) => {
  const [flip, setFlip] = useState(false);
  // mapping over data.incorrect needed to add styling such as commas and spacing
  return (
    <Card className={`card ${flip ? "flip" : ""}`}>
      <Card.Content onClick={() => setFlip(!flip)}>
        {flip ? (
          <Card.Header>{correct}</Card.Header>
        ) : (
          <Card.Header>
            {question} <br /> <br />
            {incorrect} {correct}
          </Card.Header>
        )}
      </Card.Content>
    </Card>
  );
};

export default Flashcard;
