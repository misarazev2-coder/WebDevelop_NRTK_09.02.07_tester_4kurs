console.log("Задание 1.")
console.log("С помощью цикла for выведите числа от 1 до 10. Затем измените программу так,")
console.log("чтобы числа выводились от 10 до 1.")
console.log("")

for (let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("")
console.log("меняем цикл чтобы числа выводились от 10 до 1")
console.log("")

for (let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 2.")
console.log("С помощью for выведите все чётные числа от 2 до 20. Подберите подходящий шаг изменения счётчика.")
console.log("")

for (let i = 2; i <= 20; i = i + 2){
    console.log(i);
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 3.")
console.log("Рассчитайте сумму всех целых чисел от 1 до 100. Для накопления результата")
console.log("используйте переменную let sum = 0. Выведите итоговую сумму.")
console.log("")

let num3_sum = 0
for (let i = 1; i <= 100; i++){
    num3_sum = i + num3_sum
}
console.log(num3_sum)


console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 4.")
console.log("Рассмотрите числа от 1 до 20. С помощью цикла и if определите сумму чисел,")
console.log("которые больше 10, и количество таких чисел.")
console.log("")

let num4_sum = 0
let num4_count = 0
for (let i = 1; i <= 20; i++){
    if (i > 10){
        num4_sum = i + num4_sum
        num4_count = num4_count + 1
    }
}
console.log(`Сумма: ${num4_sum}`)
console.log(`Кол-во чисел: ${num4_count}`)

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 5.")
console.log("Цена одного товара — 2500 руб. С помощью цикла выведите стоимость покупки от одной")
console.log("до десяти единиц товара. Формат: «1 шт. — 2500 руб.», «2 шт. — 5000 руб.» и т. д.")
console.log("")

let num5_productPrice = 2500
let num5_sumPrice = 0
console.log(`Стоимость товаров в зависимости от количества:`)
for (let i = 1; i <= 10; i++){
    num5_sumPrice = num5_sumPrice + num5_productPrice
    console.log(`${i} шт. - ${num5_sumPrice} руб.`)
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 6.")
console.log("С помощью while выведите числа от 1 до 10. Затем измените программу для вывода от 10 до 1.")
console.log("Следите за изменением счётчика, чтобы не создать бесконечный цикл.")
console.log("")

let num6_i1 = 1
while (num6_i1 <= 10) {
    console.log(num6_i1)
    num6_i1++
}

console.log("")
console.log("меняем цикл чтобы числа выводились от 10 до 1")
console.log("")

let num6_i2 = 10
while (num6_i2 >= 1) {
    console.log(num6_i2)
    num6_i2--
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 7.")
console.log("Создайте let number = 5. С помощью do...while выводите значение number, уменьшая его до 1.")
console.log("Затем задайте number = 0 и объясните, сколько раз выполнится цикл.")
console.log("")

let num7_number = 0
do {
    console.log(`number = ${num7_number}`)
    num7_number--
} while (num7_number >= 1)

console.log("Цикл выполнится 1 раз тк условие number = 0 изначально не удовлетворяет требованиям,")
console.log("но цикл do...while сначала выполняет тело, а только потом проверяет условие")

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 8.")
console.log("Перебирайте числа от 1 до 20. Когда значение станет равным 8, завершите цикл с помощью break.")
console.log("Проверьте, какие числа были выведены.")
console.log("")

for (let i = 1; i <= 20; i++) {
    console.log(`i = ${i}`)
    if (i == 8) {
        break
    }
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 9.")
console.log("Выведите числа от 1 до 10, но пропустите 3, 6 и 9. Для пропуска используйте continue.")
console.log("")

for(let i = 1; i <= 10; i++) {
    if (i%3 == 0) {
        continue
    }
    console.log(`i = ${i}`)
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 10. Самостоятельная задача")
console.log("Интернет-магазин продаёт товар стоимостью 1200 руб. Рассчитайте стоимость заказа для количества от")
console.log("1 до 10. Если стоимость достигает или превышает 6000 руб., предоставляется скидка 10%. Для каждого")
console.log("количества выведите количество, стоимость без скидки, размер скидки и итоговую стоимость.")
console.log("Используйте for, if...else, переменные, арифметические операторы и шаблонные строки.")
console.log("")

const num10_productPrice = 1200
let num10_discont = 0
let num10_sumNotDiscont = 0
let num10_totalPrice = 0
for (let i = 1; i <= 10; i++) {
    num10_sumNotDiscont = num10_productPrice * i
    if (num10_sumNotDiscont >= 6000) {
        num10_discont = 0.1
        num10_totalPrice = num10_sumNotDiscont - (num10_sumNotDiscont * num10_discont)
    } else {
        num10_totalPrice = num10_sumNotDiscont
    }
    console.log(`Кол-во: ${i} Стоимость без скидки: ${num10_sumNotDiscont} Скидка: ${num10_discont * 100}% Итоговая стоимость: ${num10_totalPrice}`)
}