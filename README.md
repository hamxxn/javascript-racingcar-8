# javascript-racingcar-precourse

기능 요구 사항
초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### View

- [ ] InputView

- readCarNames(): 자동차 이름 입력
- readRound(): 라운드 수 입력

- [ ] ResultView

- printGameStart(): "실행 결과" 출력
- printRoundResult(): 라운드 결과 출력
- printFinalResult(): 최종 우승자 출력

### Model

- [ ] Car

- 속성 = name: string, position: number
- 접근자 = getName(), getPosition()
- 동작 = move(): 위치를 1 증가

### Controller

- [ ] GameManager

_- 입출력은 View에 위임하고, 상태 변경은 Model(Car)에만 수행하도록 한다._

- playGame(): 전체 게임 루프 실행
- createCars(): 이름 배열로 Car 배열 생성
- getValidatedInputs(): 입력 수집 → 검증 → 파싱
- runRound(): 난수 생성 → 이동 여부 판단 → 상태 업데이트

### constants

#### car

    	CAR_MOVE_CONDITION.MIN_VALUE — 전진 임계값
    	CAR_NAME_LENGTH.MIN / CAR_NAME_LENGTH.MAX — 이름 길이 범위
    	RANDOM_NUMBER_RANGE.MIN / RANDOM_NUMBER_RANGE.MAX — 난수 범위
    	CAR_NAME_DELIMITER.LABEL / VALUE — 이름 구분자
    	CAR_POSITION_SYMBOL — 위치 표시 문자

#### error

    	COMMON_ERROR_MESSAGES - 공통 에러 메시지
    	CAR_ERROR_MESSAGES - 차 이름 관련 에러 메시지
    	ROUND_ERROR_MESSAGES - 라운드 수 관련 에러 메시지
    	ERROR_MESSAGES — 위 메시지 모음

#### io

      CAR_NAMES_MESSAGE — 자동차 이름 입력 프롬프트
      ROUND_MESSAGE — 라운드 수 입력 프롬프트
      RESULT_MESSAGE — "실행 결과"
      FINAL_WINNER_MESSAGE — "최종 우승자 : "

### utils

#### getRandomNumber()

    	RANDOM_NUMBER_RANGE.MIN~MAX 범위의 정수를 반환

#### shouldMove(random: number): boolean

    	이동이 가능한지 여부를 반환

#### isValidateCarNames(input: string): boolean | throws

    	빈 입력 / 공백 이름 / 길이 초과 / 중복 등 유효한 입력인지를 검증

#### isValidateRound(input: string): boolean | throws

    	정수 여부 / 1 이상 여부 검증

#### getWinner(cars: Car[]): string[]

    	최대 position을 가진 자동차 이름 배열 반환

### 테스트 코드

#### ValidatorTest.js

자동차 이름과 시도 횟수 검증 로직을 테스트한다.

**자동차 이름 검증 테스트:**

- 이름이 5자를 초과하는 경우
- 중복된 이름이 있는 경우
- 자동차가 입력되지 않은 경우
- 공백이 있는 자동차 이름이 있는 경우
- 가장 뒤에 쉼표가 있는 경우
- 가장 앞에 쉼표가 있는 경우
- 중간에 빈 이름이 있는 경우

**시도 횟수 검증 테스트:**

- 시도할 횟수가 0인 경우
- 시도할 횟수가 음수인 경우
- 시도할 횟수가 숫자가 아닌 경우
- 시도할 횟수가 Number.MAX_SAFE_INTEGER를 초과하는 경우
- 시도할 횟수가 빈 문자열인 경우
