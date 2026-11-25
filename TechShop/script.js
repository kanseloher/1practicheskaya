console.log("JavaScript подключён!");

document.querySelector("#buy").addEventListener("click", function() {
  document.querySelector("#message").textContent = "Заказ оформлен! Спасибо за покупку!";
});

document.querySelector("#details").addEventListener("click", function() {
  document.querySelector("#info").textContent = "Гарантия: 24 месяца. Время работы: до 20 часов.";
});

document.querySelector("#delivery").addEventListener("click", function() {
  document.querySelector("#delivery-info").textContent = "Доставка по городу — 300 ₽";
});

document.querySelector("#clear").addEventListener("click", function() {
  document.querySelector("#message").textContent = "";
});