import './style.css'

import { isNumber } from './src/utils'

const list = []

const btn = document.querySelector('#save')
// const btn2 = document.querySelector('#withdraw')
// const name = document.querySelector('#name')
// const money = document.querySelector('#myinput')

btn.addEventListener('click', () => {
  // const inputName = document.querySelector('#name')
  const input = document.querySelector('#money')
  const value = +input.value
  if (isNumber(input.value)) {
    list.push(value)
  }
  console.log(list);
})

// login = () => {
//   console.log(this.name, 'login');
// }
// saveMoney = (num) => {
//   this.money += num
//   console.log(`${this.name} money is ${this.money}`);
// }
// withdrew = (num) => {
//   this.money += -num
//   console.log(`${this.name} money is ${this.money}`);
// }
// checkMoney = () => {
//   console.log(`${this.name} Money is ${this.money}`);
// }

// function add() {
//   console.log('');
//   let a = +input3.value
//   let b = +input4.value
//   if (isNumber(a) && isNumber(b)) {
//     const sub = a + b
//     span.textContent = sub
//   } else {
//     span.textContent = ''
//   }
// }