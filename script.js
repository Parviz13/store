import {arr} from './modules/data.js'


console.log(arr);

for (let item of arr) {

  let btn = document.querySelector('#btn')
  let btn5 = document.querySelector('#btn5')
  let zero = document.querySelector('.zero')
  let container = document.querySelector('.container')
  let h4 = document.getElementsByClassName('prc')
  let plus = document.getElementById('o')
  let minus = document.getElementById('m')
  let deletebt = document.getElementsByClassName('remove-elem')
  let count = document.getElementById('o')
  let clear = document.getElementById('clear')
  
  let h3 = document.createElement('h3')
  let button = document.createElement('button')
  
  let div = document.createElement('div')
  let description = document.createElement('div')
  let flex_ = document.createElement('div')
  let flex = document.createElement('div')
  let flex2 = document.createElement('div')
  let flex3 = document.createElement('div')
  
  let img = document.createElement('img')
  let price = document.createElement('img')
  let score = document.createElement('img')
  let amount = document.createElement('img')
  
  let p = document.createElement('p')
  let flex_text = document.createElement('p')
  let flex_text1 = document.createElement('p')
  let flex_text2 = document.createElement('p')
  
  
  
  div.classList.add('box')
  description.classList.add('description')
  button.classList.add('button')
  p.classList.add('font_information')
  flex_.classList.add('flex_')
  flex.classList.add('flex')
  flex3.classList.add('flex')
  flex2.classList.add('flex')
  flex_text.classList.add('flex_text')
  flex_text1.classList.add('flex_text')
  flex_text2.classList.add('flex_text')
  
  img.src = item.image
  price.src = "./img/Group 7.png"
  score.src = "./img/Vector (1).png"
  amount.src = "./img/Group 9.png"
  
  
  
  
  flex_text.innerHTML = item.price
  flex_text1.innerHTML = item.score
  flex_text2.innerHTML = item.amount
  
  h3.innerHTML = item.category
  p.innerHTML = item.description.length > 235 ? item.description.slice(0,235) + "<b>Read more...</b>" : item.description
  button.innerHTML = "В избранное"
  
  
  
  
  div.append(img, description)
  description.append(h3, p, flex_, button)
  flex_.append(flex, flex2, flex3)
  flex.append(price, flex_text)
  flex2.append(score, flex_text2)
  flex3.append(amount, flex_text1)
  container.append(div)



 
button.onclick = () => {
  h4.pu
   console.log(item.title);
   console.log(item.price);
  console.log('Added in your purchase list'); 
    button.classList.add('button_active')
    zero.innerHTML ++   
}


plus.onclick = () => {
  count.innerHTML++
}
minus.onclick = () => {
  count.innerHTML--
  
}
deletebt.onclick = () => {
  count.innerHTML = 0 
}
clear.onclick = () => {
  console.clear()
  
}
}

// let body = document.querySelector(' .container-cart ')

// let cartItem = document.createElement('div')
// let left = document.createElement('div')
// let right = document.createElement('div')
// let counter = document.createElement('div')
// let info = document.createElement('div')
// let img = document.createElement('img')
// let plus = document.createElement('button')
// let minus = document.createElement('button')
// let delBtn = document.createElement('button')
// let count = document.createElement('b')
// let h4 = document.createElement('h4')
// let span = document.createElement('span')


// cartItem.classList.add('cart-item')
// counter.classList.add('counter')
// right.classList.add('right')
// left.classList.add('left')
// left.classList.add('info')
// info.classList.add('img')

// info.append(h4,span)
// counter.append(minus,count, plus)
// left.append(img)
// right.append(counter, delBtn)
// cartItem.append(left, right)
// body.append(cartItem)

// count.innerHTML = 0
// delBtn.innerHTML = 'Delete'
// plus.innerHTML = '+'
// minus.innerHTML = '-'

// span.innerHTML = 'price'
// h4.innerHTML = 'mans '










