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
  }, 16500);
  setTimeout(() => {
    text.textContent = "created by adi11ex";
  }, 15000);
  setTimeout(() => {
    text.textContent = "люблю тебя 💋💋💋";
  }, 12000);
  setTimeout(() => {
    text.textContent = "лучшая";
  }, 10500);
  setTimeout(() => {
    text.textContent = "одним словом";
  }, 9000);
  setTimeout(() => {
    text.textContent = "весёлая";
  }, 7500);
  setTimeout(() => {
    text.textContent = "добрая";
  }, 6000);
  setTimeout(() => {
    text.textContent = "милая";
  }, 4500);
  setTimeout(() => {
    text.textContent = "красивая";
  }, 3000);
  setTimeout(() => {
    text.textContent = "ты самая";
  }, 1500);
  setTimeout(() => {
    text.textContent = "Яна";
  }, 0);
  
}

changeText();

text.classList.add('show');
