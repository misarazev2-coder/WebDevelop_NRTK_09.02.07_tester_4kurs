//Задание 1. Простая функция
//Создайте функцию showMessage(), которая выводит «Добро пожаловать в интернет-магазин!».
//Вызовите функцию три раза.
/*
function showMessage() {
    console.log("Добро пожаловать в интернет-магазин!")
}
for (let i = 0; i <= 2; i++){
    showMessage()
}*/

//Задание 2. Функция с параметром
//Создайте функцию showProduct(name), которая выводит название переданного товара. Вызовите её для
//товаров «Ноутбук», «Клавиатура» и «Мышь».
/*
function showProduct(name) {
    console.log(`Товар: ${name}`)
}
showProduct("Ноутбук")
showProduct("Клавиатура")
showProduct("Мышь")
*/

//Задание 3. Несколько параметров
//Создайте функцию showProduct(name, price), которая получает название и цену товара и выводит их.
//Вызовите функцию для трёх разных товаров.
/*
function showProduct(name, price) {
    console.log(`Название: ${name} | Цена: ${price}`)
}
showProduct("Ноутбук", 50000)
showProduct("Клавиатура", 2300)
showProduct("Мышь", 350)
*/

//Задание 4. Расчёт стоимости
//Создайте функцию calculateTotal(price, count). Она должна возвращать стоимость покупки через return.
//Проверьте функцию с несколькими значениями.
/*
function calculateTotal(price, count) {
    let totalPrice = price * count
    return totalPrice
}
let func = calculateTotal(2300, 3)
console.log(func)
*/

//Задание 5. Проверка наличия товара
//Создайте функцию checkStock(stock). Если остаток больше нуля, вернуть «Товар есть в наличии», иначе
//— «Товар отсутствует». Результат выведите через console.log().
/*
function checkStock(stock) {
    if (stock > 0){
        console.log("Товар есть в наличии")
    } else {
        console.log("Товар отсутствует")
    }
}
checkStock(4)
checkStock(0)
checkStock(-4)
*/

//Задание 6. Расчёт скидки
//Создайте функцию getDiscount(total). Она возвращает 15 при сумме от 10000 руб., 10 при сумме от 5000
//до 9999 руб. и 0 при меньшей сумме. Проверьте несколько значений.
/*
function getDiscount(total) {
    if (total >= 10000){
        return console.log(`Ваша скидка: 15%`)
    } else if (total >= 5000){
        return console.log(`Ваша скидка: 10%`)
    } else {
        return console.log(`Ваша скидка: 0%`)
    }
}
getDiscount(11000)
getDiscount(10000)
getDiscount(9999)
getDiscount(5000)
getDiscount(4999)
*/

//Задание 7. Функция с циклом
//Создайте функцию showPrices(price, count), которая выводит стоимость товара для количества от 1 до
//переданного count. Например, showPrices(1500, 4) должно вывести стоимость для 1, 2, 3 и 4 штук.
/*
function showPrices(price, count) {
    for (let i = 1; i <= count; i++){
        let totalPrice = price * i
        console.log(`Стоимость ${totalPrice}руб. для ${i} товаров`)  
    }
}
showPrices(1500, 4)
*/

//Задание 8. Параметр по умолчанию
//Создайте функцию showUser(name = "Гость"). Вызовите showUser("Анна") и showUser(). Сравните
//результаты.
/*
function showUser(name = "Гость") {
    console.log(name)
}
showUser("Анна")
showUser()
*/

//Задание 9. Стрелочные функции
//Создайте обычную функцию double(number), возвращающую удвоенное число. Затем перепишите её в
//виде стрелочной функции. Создайте стрелочную функцию square(number), возвращающую квадрат
//числа.
/*
function double(number) {
    return number * 2
}
const double2 = (number) => number * 2
console.log(double(2))
console.log(double2(3))
const square = (number) => number * number
console.log(square(3))
*/

//Задание 10. Самостоятельная задача «Обработка заказа»
//Исходные данные: productName = "Ноутбук", price = 65000, count = 2, stock = 5. Создайте функции
//checkStock(stock, count), calculateTotal(price, count), getDiscount(total), calculateFinalPrice(total, discount).
//checkStock определяет достаточность товара; calculateTotal рассчитывает стоимость; getDiscount
//возвращает 10% от 100000 руб., 5% от 50000 руб., иначе 0%; calculateFinalPrice рассчитывает итоговую
//стоимость. Если товара достаточно, вывести сведения о заказе, стоимости, скидке и сумме к оплате.
//Если недостаточно — соответствующее сообщение. Проверьте разные значения price, count и stock.

let productName = "Ноутбук"
let price = 65000
let count = 2
let stock = 5
function checkStock(stock, count) {
    if (stock >= count){
        console.log(calculateFinalPrice(totalPrice, discount))
    } else {
        console.log("Не достаточно товаров на складе. Попробуйте позже, либо закажите меньше")
    }
}
function calculateTotal(price, count) {
    let totalPrice = price * count
    return totalPrice
}
function getDiscount(totalPrice) {
    if (totalPrice >= 100000){
        return 0.1
    } else if (totalPrice >= 50000) {
        return 0.05
    } else {
        return 0
    }
}

let totalPrice = calculateTotal(price, count)
let discount = getDiscount(totalPrice)

function calculateFinalPrice(totalPrice, discount) {
    let finalPrice = totalPrice - (totalPrice * discount)
    return finalPrice    
}

checkStock(stock, count)