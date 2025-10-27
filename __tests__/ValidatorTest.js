import { isValidateCarNames, isValidateRound } from "../src/utils/index.js";
import { ERROR_MESSAGES } from "../src/constants/index.js";

describe("자동차 이름 문자열 테스트", () => {
  test.each([
    {
      desc: "이름이 5자를 초과하면 에러를 발생시킨다.",
      input: "pobi,woni,jun,helloJavascript",
      expected: ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH,
    },
    {
      desc: "중복된 이름이 있다면 에러를 발생시킨다.",
      input: "pobi,woni,jun,jun",
      expected: ERROR_MESSAGES.INVALID_CAR_NAME_DUPLICATE,
    },
    {
      desc: "자동차가 입력되지 않으면 에러를 발생시킨다.",
      input: "",
      expected: ERROR_MESSAGES.INVALID_COMMON_INPUT,
    },
    {
      desc: "공백이 있는 자동차 이름이 있으면 에러를 발생시킨다.",
      input: "pobi, woni , jun",
      expected: ERROR_MESSAGES.INVALID_COMMON_INPUT,
    },
    {
      desc: "가장 뒤에 쉼표가 있으면 에러를 발생시킨다.",
      input: "pobi,",
      expected: ERROR_MESSAGES.INVALID_COMMON_INPUT,
    },
    {
      desc: "가장 앞에 쉼표가 있으면 에러를 발생시킨다.",
      input: ",pobi",
      expected: ERROR_MESSAGES.INVALID_COMMON_INPUT,
    },
    {
      desc: "중간에 빈 이름이 있으면 에러를 발생시킨다.",
      input: "pobi,,jun",
      expected: ERROR_MESSAGES.INVALID_COMMON_INPUT,
    },
  ])("$desc", ({ input, expected }) => {
    expect(() => isValidateCarNames(input)).toThrow(expected);
  });
});

describe("시도 횟수 테스트", () => {
  test.each([
    {
      desc: "시도할 횟수가 0이면 에러를 발생시킨다.",
      input: "0",
      expected: ERROR_MESSAGES.INVALID_ROUND,
    },
    {
      desc: "시도할 횟수가 음수면 에러를 발생시킨다.",
      input: "-1",
      expected: ERROR_MESSAGES.INVALID_ROUND,
    },
    {
      desc: "시도할 횟수가 숫자가 아니면 에러를 발생시킨다.",
      input: "abc",
      expected: ERROR_MESSAGES.INVALID_ROUND,
    },
    {
      desc: "시도할 횟수가 Number.MAX_SAFE_INTEGER를 초과하면 에러를 발생시킨다.",
      input: (Number.MAX_SAFE_INTEGER + 1).toString(),
      expected: ERROR_MESSAGES.INVALID_ROUND,
    },
    {
      desc: "시도할 횟수가 빈 문자열이면 에러를 발생시킨다.",
      input: "",
      expected: ERROR_MESSAGES.INVALID_ROUND,
    },
  ])("$desc", ({ input, expected }) => {
    expect(() => isValidateRound(input)).toThrow(expected);
  });
});
