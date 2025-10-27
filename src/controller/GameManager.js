import { InputView, ResultView } from "../view/index.js";

class GameManager {
  constructor() {
    this.inputView = new InputView();
    this.resultView = new ResultView();
  }
}

export default GameManager;
