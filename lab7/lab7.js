/*Задание 1. input type="text"
Создайте форму с текстовым полем «Имя» и кнопкой «Отправить».
Полю задайте id="userName", форме — id="userForm".
В JavaScript:
1. найдите форму;
2. обработайте submit;
3. отмените стандартную отправку;
4. получите значение поля через value;
5. удалите пробелы по краям с помощью trim();
6. выведите результат в консоль.
*/

const form = document.querySelector("#userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document
        .querySelector("#userName")
        .value
        .trim();

    /*Задание 2. textarea
    Добавьте в форму textarea для комментария к заказу.
    Получите введённый текст через value, примените trim() и    выведите комментарий в консоль.*/
    const comment = document
        .querySelector("#comment")
        .value
        .trim();        

    const agreement = document
        .querySelector("#agreement")
        .checked;

    if (agreement){
        console.log("Условия приняты")
    } else {
        console.log("Необходимо принять условия")
        return
    }

    const userData = {
        userName,
        comment,
        agreement
    };

    console.log("Данные пользователя:");
    console.log(userData);

});

/*Задание 3. checkbox
Создайте checkbox «Я согласен с условиями».
При отправке формы получите его состояние через checked.
Если флажок установлен, выведите «Условия приняты».
Если не установлен — «Необходимо принять условия».
*//*Задание 4. radio
Создайте группу radio «Способ оплаты»:
- Банковская карта — value="card";
- Наличными — value="cash".
Оба элемента должны иметь name="payment".
При отправке формы найдите выбранный radio с помощью :checked.
Если вариант выбран — выведите его value.
Если ничего не выбрано — выведите «Выберите способ оплаты».*/