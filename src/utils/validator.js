import { ERROR_MESSAGES, CAR_NAME_LENGTH } from "../constants/index.js";
import { parseCarNames } from "./index.js";

export const isValidateCarNames = (input) => {
  if (!input) {
    throw new Error(ERROR_MESSAGES.INVALID_COMMON_INPUT);
  }

  const carNames = parseCarNames(input);

  if (
    carNames.some(
      (name) =>
        name.length < CAR_NAME_LENGTH.MIN || name.length > CAR_NAME_LENGTH.MAX
    )
  ) {
    throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH);
  }

  const uniqueNames = new Set(carNames);
  if (uniqueNames.size !== carNames.length) {
    throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME_DUPLICATE);
  }

  return true;
};

export const isValidateRound = (round) => {
  if (!round) {
    throw new Error(ERROR_MESSAGES.INVALID_ROUND);
  }
  if (isNaN(round) || round <= 0 || round > Number.MAX_SAFE_INTEGER) {
    throw new Error(ERROR_MESSAGES.INVALID_ROUND);
  }
  return true;
};
