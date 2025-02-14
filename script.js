const text = document.getElementById('text');

let stop = false;

function changeText() {
  if (stop) {
    return;
  }
  setTimeout(() => {
    text.textContent = "created by adi11ex";
    text.classList.add('show');
    changeText();
  }, 19500);
  setTimeout(() => {
    text.textContent = "created by adi11ex";
  }, 18000);
  setTimeout(() => {
    text.textContent = "какой кренге, хорошо что я пьян";
  }, 16500);
  setTimeout(() => {
    text.textContent = "с 14 февраля";
  }, 15000);
  setTimeout(() => {
    text.textContent = "не оставлять же тебя в этот день без подгона";
  }, 12000);
  setTimeout(() => {
    text.textContent = "самый митый из всех";
  }, 10500);
  setTimeout(() => {
    text.textContent = "одним словом";
  }, 9000);
  setTimeout(() => {
    text.textContent = "лидер нашего отдела";
  }, 7500);
  setTimeout(() => {
    text.textContent = "опора команды";
  }, 6000);
  setTimeout(() => {
    text.textContent = "топовый дизайнер";
  }, 4500);
  setTimeout(() => {
    text.textContent = "гениальный прогер";
  }, 3000);
  setTimeout(() => {
    text.textContent = "в этот прекрасный день хочу сказать";
  }, 1500);
  setTimeout(() => {
    text.textContent = "Фара";
  }, 0);
  
}

changeText();

text.classList.add('show');
