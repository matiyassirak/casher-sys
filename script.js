"use strict";

import data from "./data.js";

console.log(data);

const tables = document.querySelectorAll(".table");

const orderPopUpBox = document.querySelector(".orders-pop-up-box");
const close = document.querySelector(".close");

close.addEventListener("click", function () {
  orderPopUpBox.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

tables.forEach(function (table) {
  table.addEventListener("click", function (e) {
    document.querySelector(".table-id").textContent = "T1";

    orderPopUpBox.style.display = "block";
    document.querySelector(".overlay").style.display = "block";
  });
});
