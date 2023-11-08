'use strict';

const listaFizzBuzz = document.getElementById("ms_lista-Fizz-Buzz");

for (let i = 1; i <= 100; i++) {

    let listItem = document.createElement("li");
    listItem.classList.add("ms_box", "m-3");

    if (i % 3 === 0 && i % 5 === 0) {
        listItem.textContent = "FizzBuzz";
        listItem.classList.add("ms_fizz_buzz");
    } else if (i % 3 === 0) {
        listItem.textContent = "Fizz";
        listItem.classList.add("ms_fizz");
    } else if (i % 5 === 0) {
        listItem.textContent = "Buzz";
        listItem.classList.add("ms_buzz");
    } else {
        listItem.textContent = i;
    }
    console.log(listItem.textContent);
    listaFizzBuzz.appendChild(listItem);
}
