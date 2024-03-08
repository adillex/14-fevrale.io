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
    text.textContent = "с днем рождения";
  }, 16500);
  setTimeout(() => {
    text.textContent = "с 8 марта";
  }, 15000);
  setTimeout(() => {
    text.textContent = "Олег лучше не найдет";
  }, 12000);
  setTimeout(() => {
    text.textContent = "лучшая женщина из всех";
  }, 10500);
  setTimeout(() => {
    text.textContent = "одним словом";
  }, 9000);
  setTimeout(() => {
    text.textContent = "добрейшей души сапорт";
  }, 7500);
  setTimeout(() => {
    text.textContent = "гениальнейший автор";
  }, 6000);
  setTimeout(() => {
    text.textContent = "топовый керри";
  }, 4500);
  setTimeout(() => {
    text.textContent = "смелый лесник";
  }, 3000);
  setTimeout(() => {
    text.textContent = "ты самая";
  }, 1500);
  setTimeout(() => {
    text.textContent = "Моника";
  }, 0);
  
}

changeText();

text.classList.add('show');
