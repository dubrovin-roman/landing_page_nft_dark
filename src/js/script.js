"use strict";

const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const h1 = document.querySelector(".h1");

btn.addEventListener("click", () => {
  h1.insertAdjacentHTML("afterend", "<h2>Вы нажали кнопку</h2>");
});

btn1.addEventListener("click", () => {
  h1.style.color = "red";
});

btn2.addEventListener("click", () => (h1.style.color = "yellow"));
