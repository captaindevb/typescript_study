console.log("챕터 4 - 함수")

function add(a: number, b: number): number {
  return a + b
}

//const greet: (name: string) => string
const greet = (name: string) => {
  return "hello" + name
}

//위와 동일, 반환타입을 명시. 보통은 반환 타입을 추론하도록 하는게 보통이다.
const greet2 = (name: string): string => {
  return "hello" + name
}

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || "Not Signed in")
}

//위와 완전히 동일한 함수
function log2(message: string, userId = "Not Signed in") {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}

log("돌핀")
log("살짝설렜어", "오마이걸")

type Context = {
  appId?: string
  useId?: string
}

function log3(message: string, context: Context = {}) {
  //기본값 지정하지 않으면 두개 넣어줘야함.
  let time = new Date().toISOString()
  console.log(time, message, context.useId)
}

log3("log3 test") //2021-02-28T06:34:37.855Z log3 test undefined
log3("돌핀", { appId: "오마이걸", useId: "또 물보라를 일으켜" }) //2021-02-28T06:35:44.151Z 돌핀 또 물보라를 일으켜

//인수를 여러개 받는 함수라면 그 목록을 배열 형태로 건넬 수도 있다.
function sum1(number: number[]): number {
  return number.reduce((total, n) => total + n, 4)
}
console.log(sum1([1, 2, 3]))

//타입 안정성을 갖춘 임의의 인수를 받는 함수

function sumVariadicSafe(...number: number[]): number {
  return number.reduce((total, n) => total + n, 0)
}
console.log(sumVariadicSafe(1, 2, 3, 4))

//this의 타입
function fancyDate(this: Date) {
  //this 타입을 첫번째 매개변수로 선언하면 여기서 사용한 this는 예약어이므로 다른 매개변수와 완전히 다른 방식으로 처리된다.
  return `${this.getDate()} /${this.getMonth()}/${this.getFullYear()}`
}

// fancyDate(new Date()) //Expected 0 arguments, but got 1.
// fancyDate.call(new Date())
// fancyDate() //The 'this' context of type 'void' is not assignable to method's 'this' of type 'Date'.

//함수의 타입, 호출 시그니쳐
function sum(a: number, b: number): number {
  return a + b
}

//sum의 타입은 Function이라 말할 수 있다. 타입스크립트에서는 아래와 같이 표현할 수 있다.
// sum(a: number, b: number): number
//위 코드는 타입스크립트의 함수 타입 문법으로, 호출 시그니처 혹은 타입 시그니처라 부른다.

//기존 log 함수를 새로운 시그니처에 맞게 다시 구현해보기
type NewLog = (message: string, useId?: string) => void

let newLog: NewLog = (message, userId = "또 물보라를 일으켜") => {
  //NewLog에서 이미 message 타입명을 명시했으므로 여기선 건너 뛰어도 됨.
  //NewLog 타입에서 반환 값을 이미 지정했으므로 반환값을 지정할 필요 없음
  let time = new Date().toISOString()
  console.log(time, message, userId)
}

//문맥적 타입화
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}
//times를 호출할때 함수 선언을 인라인으로 제공하면 인수로 전달하는 함수의 타입을 명시할 필요가 없다.
times((n) => console.log(n), 4)

//오버로드된 함수 타입
type Reserve = {
  (from: Date, to: Date, destination: string): void
  (from: Date, destination: string): void
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (typeof toOrDestination === "string" && destination === undefined) {
    //편도 여행 예약
    console.log(toOrDestination + "으로 편도 여행을 예약하셨군요")
  } else if (toOrDestination instanceof Date) {
    //왕복 여행 예약
    console.log(destination + "으로 왕복 여행을 예약하셨군요")
  }
}

reserve(new Date(), new Date(), "한국")
reserve(new Date(), "뉴질랜드")

type CreateElement = {
  (tag: "a"): HTMLElement
}

//제네릭 타입

// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }
type Filter<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}
// let filter: Filter = (array, f) => {
//   //Generic type 'Filter' requires 1 type argument(s).ts(2314)
//   console.log("에러!")
// }]

let filter: Filter<Number> = (array, f) => {
  return array
}
