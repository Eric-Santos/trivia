import { Card } from "semantic-ui-react";

const Flashcard = ({ question, incorrect, correct }) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{question}</Card.Header>
        <Card.Meta>{incorrect}</Card.Meta>
        <Card.Description>{correct}</Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default Flashcard;
