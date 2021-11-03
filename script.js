const insertText = document.getElementById('text-input');
const paragraf = document.getElementById('meme-text');
const btnI = document.getElementById('meme-insert');
const board = document.getElementById('meme-image-container');
const canvas = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

// Criando atalhos ^

function changeText() {
  paragraf.innerText = insertText.value;
}

// Add texto ao meme ^

function bkgdSet() {
  canvas.src = URL.createObjectURL(btnI.files[0]);
}
// Seta a imagem do meme ^

function bkgdSetII(meme) {
  console.log('MEMEME');
  canvas.src = meme.target.src;
}
// Seta a imagem do meme pré definido ^

function BordaFogo() {
  board.style.border = 'dashed red 3px';
}
// Muda propriedades da borda ^
function BordaAgua() {
  board.style.border = 'double blue 5px';
}
// Muda propriedades da borda ^
function BordaTerra() {
  board.style.border = 'groove green 6px';
}
// Muda propriedades da borda ^

insertText.addEventListener('keyup', changeText);
btnI.addEventListener('click', bkgdSet);
btnI.addEventListener('change', bkgdSet);
btnFire.addEventListener('click', BordaFogo);
btnWater.addEventListener('click', BordaAgua);
btnEarth.addEventListener('click', BordaTerra);

meme1.addEventListener('click', bkgdSetII);
meme2.addEventListener('click', bkgdSetII);
meme3.addEventListener('click', bkgdSetII);
meme4.addEventListener('click', bkgdSetII);
// Ouvintes de evento
