import { MissionUtils } from "@woowacourse/mission-utils";
import { RANDOM_NUMBER_RANGE } from "../constants/index.js";

export const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    RANDOM_NUMBER_RANGE.MIN,
    RANDOM_NUMBER_RANGE.MAX
  );
};
