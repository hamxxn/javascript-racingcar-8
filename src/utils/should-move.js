import { CAR_MOVE_CONDITION } from "../constants/index.js";

export const shouldMove = (randomNumber) => {
  return randomNumber >= CAR_MOVE_CONDITION.MIN_VALUE;
};
