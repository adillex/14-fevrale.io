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
  }, 18000);
  setTimeout(() => {
    text.textContent = "created by adi11ex";
  }, 16500);
  setTimeout(() => {
    text.textContent = "с 8 марта";
  }, 15000);
  setTimeout(() => {
    text.textContent = "лучше я уже не найду";
  }, 12000);
  setTimeout(() => {
    text.textContent = "лучшая женщина из всех";
  }, 10500);
  setTimeout(() => {
    text.textContent = "одним словом";
  }, 9000);
  setTimeout(() => {
    text.textContent = "добрая";
  }, 7500);
  setTimeout(() => {
    text.textContent = "интересная";
  }, 6000);
  setTimeout(() => {
    text.textContent = "веселая";
  }, 4500);
  setTimeout(() => {
    text.textContent = "угарная";
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
