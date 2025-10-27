import { MissionUtils } from "@woowacourse/mission-utils";
import { IO_MESSAGES } from "../constants/index.js";

export class InputView {
  async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      IO_MESSAGES.CAR_NAMES_MESSAGE
    );
    return input;
  }

  async readRound() {
    const input = await MissionUtils.Console.readLineAsync(
      IO_MESSAGES.ROUND_MESSAGE
    );
    return input;
  }
}
