console.log("Задание 1.")
console.log("Создайте функцию showMessage(), которая выводит «Добро пожаловать в интернет-магазин!».")
console.log("Вызовите функцию три раза.")
console.log("")

function num1_showMessage() {
    console.log("Добро пожаловать в интернет-магазин!")
}
for (let i = 0; i <= 2; i++){
    num1_showMessage()
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 2.")
console.log("Создайте функцию showProduct(name), которая выводит название переданного товара.")
console.log("Вызовите её для товаров «Ноутбук», «Клавиатура» и «Мышь»")
console.log("")

function num2_showProduct(name) {
    console.log(`Товар: ${name}`)
}
num2_showProduct("Ноутбук")
num2_showProduct("Клавиатура")
num2_showProduct("Мышь")

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")


console.log("Задание 3.")
console.log("Создайте функцию showProduct(name, price), которая получает название и цену товара и выводит их.")
console.log("Вызовите функцию для трёх разных товаров.")
console.log("")

function num3_showProduct(name, price) {
    console.log(`Название: ${name} | Цена: ${price}`)
}
num3_showProduct("Ноутбук", 50000)
num3_showProduct("Клавиатура", 2300)
num3_showProduct("Мышь", 350)

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 4.")
console.log("Создайте функцию calculateTotal(price, count). Она должна возвращать стоимость покупки через return.")
console.log("Проверьте функцию с несколькими значениями.")
console.log("")

function calculateTotal(num4_price, num4_count) {
    let num4_totalPrice = num4_price * num4_count
    return num4_totalPrice
}
let num4_func = calculateTotal(2300, 3)
console.log(num4_func)

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 5.")
console.log("Создайте функцию checkStock(stock). Если остаток больше нуля, вернуть «Товар есть в наличии», иначе")
console.log("— «Товар отсутствует». Результат выведите через console.log().")
console.log("")

function num5_checkStock(num5_stock) {
    if (num5_stock > 0){
        console.log("Товар есть в наличии")
    } else {
        console.log("Товар отсутствует")
    }
}
num5_checkStock(4)
num5_checkStock(0)
num5_checkStock(-4)

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 6.")
console.log("Создайте функцию getDiscount(total). Она возвращает 15 при сумме от 10000 руб., 10 при сумме от 5000")
console.log("до 9999 руб. и 0 при меньшей сумме. Проверьте несколько значений.")
console.log("")

function num6_getDiscount(num6_total) {
    if (num6_total >= 10000){
        return console.log(`Ваша скидка: 15%`)
    } else if (num6_total >= 5000){
        return console.log(`Ваша скидка: 10%`)
    } else {
        return console.log(`Ваша скидка: 0%`)
    }
}
num6_getDiscount(11000)
num6_getDiscount(10000)
num6_getDiscount(9999)
num6_getDiscount(5000)
num6_getDiscount(4999)

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 7.")
console.log("Создайте функцию showPrices(price, count), которая выводит стоимость товара для количества от 1 до")
console.log("переданного count. Например, showPrices(1500, 4) должно вывести стоимость для 1, 2, 3 и 4 штук.")
console.log("")

function num7_showPrices(num7_price, num7_count) {
    for (let i = 1; i <= num7_count; i++){
        let num7_totalPrice = num7_price * i
        console.log(`Стоимость ${num7_totalPrice}руб. для ${i} товаров`)  
    }
}
num7_showPrices(1500, 4)

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 8.")
console.log(`Создайте функцию showUser(name = "Гость"). Вызовите showUser("Анна") и showUser().`)
console.log("Сравните результаты.")
console.log("")

function num8_showUser(num8_name = "Гость") {
    console.log(num8_name)
}
num8_showUser("Анна")
num8_showUser()

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 9.")
console.log("Создайте обычную функцию double(number), возвращающую удвоенное число. Затем перепишите её в")
console.log("виде стрелочной функции. Создайте стрелочную функцию square(number), возвращающую квадрат числа.")
console.log("")

function num9_double(num9_number) {
    return num9_number * 2
}
const num9_double2 = (num9_number) => num9_number * 2
console.log(num9_double(2))
console.log(num9_double2(3))
const num9_square = (num9_number) => num9_number * num9_number
console.log(num9_square(3))

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 10. Самостоятельная задача «Обработка заказа»")
console.log(`Исходные данные: productName = "Ноутбук", price = 65000, count = 2, stock = 5. Создайте функции`)
console.log(`checkStock(stock, count), calculateTotal(price, count), getDiscount(total), calculateFinalPrice(total, discount).`)
console.log(`checkStock определяет достаточность товара; calculateTotal рассчитывает стоимость; getDiscount`)
console.log(`возвращает 10% от 100000 руб., 5% от 50000 руб., иначе 0%; calculateFinalPrice рассчитывает итоговую`)
console.log(`стоимость. Если товара достаточно, вывести сведения о заказе, стоимости, скидке и сумме к оплате.`)
console.log(`Если недостаточно — соответствующее сообщение. Проверьте разные значения price, count и stock.`)
console.log("")

let num10_productName = "Ноутбук"
let num10_price = 65000
let num10_count = 2
let num10_stock = 5

function num10_checkStock(num10_stock, num10_count) {
    if (num10_stock >= num10_count){
        console.log(num10_calculateFinalPrice(num10_totalPrice, num10_discount))
    } else {
        console.log("Не достаточно товаров на складе. Попробуйте позже, либо закажите меньше")
    }
}

function num10_calculateTotal(num10_price, num10_count) {
    let num10_totalPrice = num10_price * num10_count
    return num10_totalPrice
}

function num10_getDiscount(num10_totalPrice) {
    if (num10_totalPrice >= 100000){
        return 0.1
    } else if (num10_totalPrice >= 50000) {
        return 0.05
    } else {
        return 0
    }
}

let num10_totalPrice = num10_calculateTotal(num10_price, num10_count)
let num10_discount = num10_getDiscount(num10_totalPrice)

function num10_calculateFinalPrice(num10_totalPrice, num10_discount) {
    let num10_finalPrice = num10_totalPrice - (num10_totalPrice * num10_discount)
    return num10_finalPrice    
}

num10_checkStock(num10_stock, num10_count)