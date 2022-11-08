import './style.css'

import { isNumber, mySort } from './src/utils'

let list = []

let mainTdsum = 0

const btn = document.querySelector('#btnS')
const btn2 = document.querySelector('#btnW')
// const name = document.querySelector('#name')


btn.addEventListener('click', () => {
  // const inputName = document.querySelector('#name')
  const input = document.querySelector('#inputM')
  const value = +input.value

  //(isNumber(value))!!!!!!!!!!!!!!!!!!
  if (isNumber(value)) {
    list.push(value)
  }
  console.log(list);

  input.value = ''
  const orderList = mySort(list)
  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''
  let tdSum = 0

  orderList.forEach((elemnt, index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')
    const td2 = document.createElement('td2')

    th.textContent = index + 1
    td.textContent = elemnt
    tdSum += +elemnt
    // console.log(mainTdsum);
    td2.textContent = tdSum

    tr.append(th, td, td2)
    tbody.append(tr)
  })
})


btn2.addEventListener('click', () => {
  // const inputName = document.querySelector('#name')
  const input = document.querySelector('#inputM')
  const value = +input.value

  //(isNumber(value))!!!!!!!!!!!!!!!!!!
  if (isNumber(value)) {
    list.push(-value)
  }
  console.log(list);



  const orderList = mySort(list)
  list = [...orderList]

  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''
  input.value = ''
  let tdSum = 0

  orderList.forEach((elemnt, index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')
    // const td2 = document.createElement('td2')
    const td3 = document.createElement('td3')

    th.textContent = index + 1
    td.textContent = elemnt
    // td2.textContent = -elemnt
    tdSum += elemnt
    // console.log(mainTdsum);

    td3.textContent = tdSum
    tr.append(th, td, td3)
    tbody.append(tr)
  })
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