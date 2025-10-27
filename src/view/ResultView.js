import { MissionUtils } from "@woowacourse/mission-utils";
import { IO_MESSAGES, CAR_POSITION_SYMBOL } from "../constants/index.js";

export class ResultView {
  printGameStart() {
    MissionUtils.Console.print("\n" + IO_MESSAGES.RESULT_MESSAGE);
  }

  printRoundResult(cars) {
    cars.forEach((car) => {
      const positionDisplay = CAR_POSITION_SYMBOL.repeat(car.getPosition());
      MissionUtils.Console.print(`${car.getName()} : ${positionDisplay}`);
    });
    MissionUtils.Console.print("\n");
  }

  printFinalResult(winners) {
    MissionUtils.Console.print(
      `${IO_MESSAGES.FINAL_WINNER_MESSAGE}${winners.join(",")}`
    );
  }
}
