import { CAR_NAME_DELIMITER } from "../constants/index.js";

/**
 * 자동차 이름 파싱
 * @param {string} input 자동차 이름 입력
 * @returns {string[]} 자동차 이름 배열
 */
export const parseCarNames = (input) => {
  return input.split(CAR_NAME_DELIMITER.VALUE).map((name) => name.trim());
};
