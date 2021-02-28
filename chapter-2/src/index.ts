console.log("안녕 타입스크립트!")
console.log("챕터 2~3 장 연습 코드")

// let a = 1 + 2
// let b = a + 3
// // 어노테이션을 사용해 타입스크립트에 명시적으로 타입 지정하기.
// // 어노테이션을 사용하지 않아도 타입스크립트가 알아서 타입을 추론하므로, 꼭 필요할때에만 쓴다.
// let c: {
//   apple: number
//   banana: number
// } = {
//   apple: a,
//   banana: b,
// }
// let d = c.apple * 4

// let a: unknown = 30 //타입스크립트가 무언가의 타입을 unknown이라고 추론하는 상황은 없다. 개발자가 명시적으로 설정해야 한다.
// let b = a === 123 //unknown 타입 값과 unknown이 아닌 타입 값을 비교할 수 있다.
// // let c = a + 10  //unknown 값이 특정 값이라고 지정하고 해당 타입에서 지원하는 동작을 수행할수는 없다.
// if (typeof a === "number") {
//   // 타입스크립트에게 해당 값이 특정 타입이라고 증명해야만 동작을 수행할 수 있다.
//   let d = a + 10
// }

// let a = true //어떤 값이 boolean인지 타입스크립트가 추론하게 한다.
// var b = true //..
// const c = true // 어떤 값이 특정(true or false) boolean인지 타입스크립트가 추론하게 한다.
// let d: boolean = true // 값이 boolean임을 명시적으로 타입스크리브에 알린다. * 명시적 타입 리터럴
// let e: true = true // 값을 타입으로 사용하므로 e와 f에 사용할 수 있는 값은 boolean 타입이 가질 수 있는 값 중 특정한 하나의 값으로 한정된다.
// //이와 같은 기능을 타입 리터럴이라 부른다!
// // let f: true = false //type true에 false를 할당 할 수 없어서 오류 발생.

// let a = {
//   b: "x",
// }
// let b = {
//   c: {
//     d: "f",
//   },
// }
// let a2: { b: number } = {
//   b: 11,
// }
// let c: {
//   firstName: string
//   lastName: string
// } = {
//   firstName: "은비",
//   lastName: "이",
// }

// class Person {
//   constructor(public firstName: string, public LastName: string) {
//     console.log(firstName + LastName)
//     const result = this.firstName + this.LastName
//     console.log("result", result)
//   }
// }

// const d = new Person("은비", "이")
// console.log(d)
// console.log(Person)

// let i: number
// let j = i *3 //값을 할당하기 전에 사용하였음

// let o
// let p = o * 3 // o는 undifined 객체일 수 있음

// let a: {
//   b: number
//   c?: string
//   [key: number]: boolean
// }

// a = { b: 1 }
// a = { b: 1, c: undefined } //c가 존재하지 않을수도 있으니
// a = { b: 1, c: "d" }
// a = { b: 1, 10: true }
// a = { b: 1, 10: true, 20: false }
// a = { 10: true } //필수값 b가 없음
// a = { b: 1, 33: "red" } //string은 boolean 타입에 할당할 수 없음

// let danger: {} // 빈 객체 타입, null 과 undefined를 제외한 모든 타입을 할당할 수 있으나, 사용하기 까다로우므로 피한다.
// danger = {}
// danger = { x: 1 }
// danger = []
// danger = 2
// danger = undefined //Type 'undefined' is not assignable to type '{}'.

// let danger: Object // 위의 빈 객체 타입과 동일하게 작용. 마찬가지로 사용하지 않는게 좋다.
// danger = {}
// danger = { x: 1 }
// danger = []
// danger = ["1", "2"]
// danger = 3
// danger = "2"
// danger = undefined //Type 'undefined' is not assignable to type 'Object'.
// danger = null //Type 'null' is not assignable to type 'Object'

// let test: object // 어떤 필드를 갖고 있는지는 관심없고, 그저 객체가 필요할때 사용.
// test = {}
// test = "zz" // Type '"zz"' is not assignable to type 'object'.
// test = new String('a') // new String 로 뱉는 결과가 String 객체이므로 할당 가능.
// test = ["zz", "vvv"]
// test = 1 //Type '1' is not assignable to type 'object'.
// test = { z: "11" }

// type Color  = 'red'
// type Color = 'black' //중복 정의 불가.
// let x = Math.random() < .5 //50% 확률로 true혹은 false 반환
// if(x){ //블록은 자신만의 영역을 가지므로 내부에 정의한 타입 별칭이 외부의 정의를 덮어쓴다.
//   type Color = 'blue'
//   let b: Color = 'blue'
// }else{
//   let c: Color = 'red'
// }

// let a: object[] = [{ zz: "zz", dd: "dd" }]
// let b: object[] = [["zz"], ["dd"], ["ff"]]

// let c = [{ zz: "zz", dd: "dd" }]
// let f = ["red"] //let f: string[]
// f.push("blue")
// f.push(true) //Argument of type 'true' is not assignable to parameter of type 'string'.

// let g = [] //let g: any[]
// g.push(1)
// g.push("red")

// function test() {
//   let a = [] //let a: any[]
//   a.push(1) //let a: any[]
//   a.push("x") //let a: any[]
//   return a // let a: (string | number)[]
//   //배열이 정의 된 영역을 벗어나면(함수 안에서 배열을 선언하고 이를 반환) ts는 배열은 더 이상 확장할 수 없도록 최종 타입을 할당한다.
// }
// let myArray = test() //let myArray: (string | number)[]
// myArray.push(true) //Argument of type 'true' is not assignable to parameter of type 'string | number'.ts

// //튜플 사용법
// let a: [number] = [1]
// let b: [object] = [{a:'a', b:'b'},{c:'c',d:'d'}] //Types of property 'length' are incompatible. Type '2' is not assignable to type '1'.
// let c: [object, object] = [{a:'a', b:'b'},{c:'c',d:'d'}]
// let d: [object, ...object[]] = [{a:'a', b:'b'},{c:'c',d:'d'}, {e:'e',d:'d'}]

// //읽기 전용 배열과 튜플
// let as: readonly number[] = [1,2,3]
// let bs: readonly number[] = as.concat(4)
// let three = bs[2]
// as[4] = 5 //Index signature in type 'readonly number[]' only permits reading.
// as.push(6) //Property 'push' does not exist on type 'readonly number[]'.

// type A = readonly string[]
// type B = readonly [number, string]

// function a(x: number) {
//   //function a(x: number): number | null
//   if (x < 10) {
//     return x
//   }
//   return null
// }

// function b() {
//   //function b(): undefined
//   return undefined
// }

// function c() {
//   //function c(): void
//   let a = 2 + 2
//   let b = a * a
// }

// function d() {
//   //function d(): void
//   throw TypeError("I always error")
// }

// function e() {
//   //function e(): void
//   while (true) {
//     doSomething()
//   }
// }

//열거형 enum // 타입으로 사용할 수 있는 값
// enum Language {
//   English = "stirng",
//   Spanish = "thie",
//   Russian = 3,
//   Korean = "my",
// }

// console.log(Language)

// let myFistLanguage = Language.Korean
// console.log(myFistLanguage)
// let mySecondLanguage = Language.English
// console.log(mySecondLanguage)

// const enum Flippable {
//   Burger = "burger",
//   Chair = 'Chair',
//   Cup = 'Cup',
//   Skateboard = "Skateboard",
//   Table = 'Table'
// }

// function flip(f: Flippable){
//   return 'flipped it'
// }

// flip(Flippable.Chair)
// flip(Flippable.Cup)
// flip(12) //Argument of type '12' is not assignable to parameter of type 'Flippable'.
// flip('Hat') //Argument of type '"Hat"' is not assignable to parameter of type 'Flippable'.

//타입추론 문제
// let a = 1042 //a: number
// let b = "apple" //b: string
// const c = "banana" //c: 'banana'
// let d = [true, true, false] //d: boolean[]
// // let e = {type: 'ficus'} //e: object
// let e: { type: string } = { type: "ficus" }
// let f = [1, false] //f: (number | boolean)[]
// const g = [3] //g: number[]
// let h = null // h: any
