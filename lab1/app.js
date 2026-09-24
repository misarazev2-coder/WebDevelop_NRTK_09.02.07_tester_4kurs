//1
console.log('Лабораторная работа №1');
console.log('Основы JavaScript');

//2
let product_name = 'Монитор'
let product_price = 25000
let product_count = 8
let product_accessibility = true

console.log(`Товар: ${product_name}\nЦена: ${product_price}\nКоличество: ${product_count}\nДоступен: ${product_accessibility}`)

//3
let product_name = 'Монитор'
let product_price = 25000
let product_count = 8
let product_accessibility = true

console.log(`Тип названия: ${typeof(product_name)}\nТип цены: ${typeof(product_price)}\nТип количества: ${typeof(product_count)}\nТип доступности: ${typeof(product_accessibility)}`)

//4
let product_price = 3500
let product_count = 4
let delivery_price = 500
let price = product_price*product_count
let price_rezult = price + delivery_price

console.log(`Стоимость товаров: ${price} руб. \nДоставка: ${delivery_price} руб. \nИтого: ${price_rezult} руб.`)

//5
let product_price = 8000
let discont = 15
let discont_summ = (product_price/100)*discont
let product_price_discont = product_price - discont_summ

console.log(`Цена: ${product_price} \nСкидка: ${discont}% \nСумма скидки: ${discont_summ} руб. \nЦена со скидкой: ${product_price_discont} руб.`)

//6
let product_count = 15
console.log(`Количество товаров на складе до продажи: ${product_count}`)

let saled = 4
product_count = product_count - saled
console.log(`Количество товаров на складе после продажи: ${product_count}`)

product_count++
console.log(`Количество товаров на складе после возврата: ${product_count}`)

const price = "4500"
const count = "3"
console.log(`Тип const price до: ${typeof(price)}`)

//7
let price_num = Number(price)
let count_num = Number(count)
let summ_price = price_num * count_num
console.log(`Тип const price после: ${typeof(price_num)}\nЦена: ${price_num}руб. \nКоличество: ${count_num}\nИтог:${summ_price}`)


//8
let product = "Наушники"
let price = 4500
let count = 3
let discont = 10
let delivery = 400

console.log(`Стоимость без скидки: ${price*count}\nРазмер скидки в рублях: ${(price/100)*discont}\nИтоговая стоимость со скидкой и доставкой: ${((price-((price/100)*discont))*count)+delivery}`)