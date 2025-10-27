import Car from "../model/Car.js";
import { InputView, ResultView } from "../view/index.js";
import {
  isValidateCarNames,
  isValidateRound,
  parseCarNames,
} from "../utils/index.js";

class GameManager {
  constructor() {
    this.inputView = new InputView();
    this.resultView = new ResultView();
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  async playGame() {
    const { carNames, round } = await this.getValidatedInputs();
    const cars = this.createCars(carNames);
  }

  async getValidatedInputs() {
    const carNamesInput = await this.inputView.readCarNames();
    isValidateCarNames(carNamesInput);
    const carNames = parseCarNames(carNamesInput);

    const roundInput = await this.inputView.readRound();
    isValidateRound(roundInput);
    const round = parseInt(roundInput);

    return { carNames, round };
  }
}

export default GameManager;
