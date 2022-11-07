import './style.css'

import { isNumber, mySort } from './src/utils'

const list = []

const btn = document.querySelector('#save')

btn.addEventListener('click', () => {
  const save = document.querySelector('#myinput')
  const value = +save.value
  if (isNumber(value)) {
    list.push(value)
  }
  console.log(list);
  save.value = ''
  const orderList = mySort(list)
  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''
  
  const withdrew =
  orderList.forEach((element, index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')

    th.textContent = index + 1
    const td = document.createElement('td')
    td.textContent = element
    tr.append(th, td)
    tbody.append(tr)
  })
})

