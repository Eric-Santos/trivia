import App from "./App";
import FlashcardList from "./components/FlashcardList";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
});
