console.log("Задание 1. Операторы сравнения")
console.log("Создайте переменные price = 5000 и limit = 3000. Определите и выведите: цена больше лимита; меньше")
console.log("лимита; больше или равна; равна; не равна.")
console.log("")
console.log("Ответ:")

let num1_price = 5000
let num1_limit = 3000

num1_price > num1_limit ? console.log("цена больше лимита") : 
num1_price < num1_limit ? console.log("меньше лимита") :
num1_price >= num1_limit ? console.log("больше  или равна лимита") :
num1_price == num1_limit ? console.log("равна лимита") :
num1_price != num1_limit ? console.log("не равна лимита") : 0;

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 2. Логические операторы")
console.log("Даны price = 2500 и stock = 5. Получите результаты: цена больше 1000 И товар есть на складе; цена")
console.log("меньше 1000 ИЛИ товар есть на складе; товар НЕ отсутствует.")
console.log("")
console.log("Ответ:")

let num2_price = 2500
let num2_stock = 5
if (num2_price > 1000 && num2_stock > 0) {
    console.log("цена больше 1000 И товар есть на складе")
} 
if (num2_price < 1000 || num2_stock > 0){
    console.log("цена меньше 1000 ИЛИ товар есть на складе")
}
if (num2_stock > 0){
    console.log("товар НЕ отсутствует")
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 3. Проверка наличия товара")
console.log("Создайте stock = 7. Если stock > 0, выведите «Товар есть в наличии», иначе — «Товар отсутствует».")
console.log("Проверьте также значение stock = 0.")
console.log("")
console.log("Ответ:")

let num3_stock = 7
if (num3_stock > 0){
    console.log("Товар есть в наличии")
} else {
    console.log("Товар отсутствует")
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 4. Проверка возраста пользователя")
console.log("Создайте переменную возраста. Если возраст 18 лет или больше — вывести «Доступ разрешён», иначе")
console.log("— «Доступ запрещён». Проверьте несколько значений.")
console.log("")
console.log("Ответ:")

let num4_age = 18
if (num4_age >= 18){
    console.log("Доступ разрешён")
} else {
    console.log("Доступ запрещён")
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 5. Определение размера скидки")
console.log("Для суммы заказа total определите скидку: 10000 руб. и более — 15%; от 5000 до 9999 — 10%; менее")
console.log("5000 — скидки нет. Используйте if...else if...else. Дополнительно рассчитайте итоговую стоимость.")
console.log("")
console.log("Ответ:")

let num5_total = 10000
let num5_discont1 = 15
let num5_discont2 = 10
if(num5_total >= 10000){
    num5_total = num5_total - ((num5_total/100)*num5_discont1)
    console.log(`Итоговая стоимость ${num5_total}`)
} else if (num5_total >= 5000) {
    num5_total = num5_total - ((num5_total/100)*num5_discont2)
    console.log(`Итоговая стоимость ${num5_total}`)
} else {
    console.log(`Итоговая стоимость ${num5_total}`)
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 6. Проверка возможности оформления заказа")
console.log("Даны stock = 10 и count = 4. Заказ разрешён, если товар есть на складе И запрашиваемое количество не")
console.log("превышает остаток. Используйте &&. Проверьте разные значения.")
console.log("")
console.log("Ответ:")

let num6_stock = 10
let num6_count = 4
if (num6_stock > 0 && num6_stock >= num6_count){
    console.log("Успешно заказали")
} else {
    console.log("Заказ превышает лимит на складе. Попробуйте позже")
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 7. Проверка роли пользователя")
console.log(`Создайте role = "manager". Доступ к разделу управления разрешён для admin ИЛИ manager. Для`)
console.log("остальных — запрещён. Используйте ||.")
console.log("*чтобы увидеть работу кода введите новое значение в role")
console.log("")
console.log("Ответ:")

let num7_role1 = 'admin'
let num7_role2 = 'manager'

let num7_role = 'manager'

if (num7_role === num7_role2 || num7_role === num7_role1){
    console.log("Доступ к разделу управления разрешён")
} else {
    console.log("Доступ к разделу управления запрещён")
}


console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 8. Проверка пользователя")
console.log(`Даны role = "admin" и isBlocked = false. Разрешите доступ только администратору, который не`)
console.log("заблокирован. Используйте ===, && и !. Проверьте варианты admin/false, admin/true, user/false.")
console.log("")
console.log("Ответ:")

let num8_role = "admin" 
let num8_isBlocked = false

if (num8_role === "admin" && !num8_isBlocked){
    console.log("Доступ разрешен")
} else {
    console.log("Доступ запрещен")
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 9. Статус заказа")
console.log(`Создайте status = "paid". С помощью switch обработайте значения: new — «Новый заказ»; paid — «Заказ`)
console.log("оплачен»; sent — «Заказ отправлен»; completed — «Заказ выполнен». Для остальных вывести")
console.log("«Неизвестный статус заказа».")
console.log("")
console.log("Ответ:")

let num9_status = "paid"
switch (num9_status) {
    case 'new':
        console.log("Новый заказ")
        break;
    case 'paid':
        console.log("Заказ оплачен")
        break;
    case 'sent':
        console.log("Заказ отправлен")
        break;
    case 'completed':
        console.log("Заказ выполнен")
        break;
    default:
        console.log("Неизвестный статус заказа")
        break;
}

console.log("")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("")

console.log("Задание 10. Самостоятельная задача «Оформление заказа»")
console.log(`Исходные данные: productName = "Ноутбук", price = 65000, stock = 5, count = 2, isBlocked = false.`)
console.log("Последовательно проверьте: пользователь не заблокирован; товар есть; количества достаточно. Если")
console.log("проверки пройдены — рассчитайте стоимость заказа. При ошибке выведите соответствующее")
console.log("сообщение. Проверьте программу при разных stock, count и isBlocked.")
console.log("")
console.log("Ответ:")

let num10_productName = "Ноутбук"
let num10_price = 65000
let num10_stock = 5
let num10_count = 2
let num10_isBlocked = false
let num10_priceSumm = 0

if (!num10_isBlocked){
    if (num10_stock > 0){
        if (num10_count <= num10_stock){
            num10_priceSumm = num10_price * num10_count;
            console.log(`Успешно! Вы приобрели ${num10_count} товаров ${num10_productName} за ${num10_priceSumm} рублей.`)
        } else {
            console.log("Ошибка! На складе не достаточно товаров")
        }
    } else {
        console.log("Ошибка! На складе не осталось товаров")    
    }
} else {
    console.log("Ошибка! Пользователь заблокирован")
}