// Retoma os elementos a partir de seus IDs

const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const updatevalue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

// Funções que proporcionam os botões de Soma(+) e Subtração(-) a adicionarem valores quando o botão do mouse é segurado

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      count += 1; 
      updatevalue();

    }, 150);

});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      count -= 1; 
      updatevalue();

    }, 150);

});

// Funções que permitem o funcionamento dos botões de Soma(+), Subtração(-) e Reset a partir de um click único do mouse,
// garantindo que eles executem suas respectivas funções(adicionar 1, subtrair 1 e redefinir o contador para 0)
 

plusButton.addEventListener('click', () => {
    count += 1; 
    updatevalue();

});

minusButton.addEventListener('click', () => {
    count -= 1; 
    updatevalue();


});

resetButton.addEventListener('click', () => {
    count = 0;
    updatevalue();

});

// Funções que faz os botões de Soma(+) e Subtração(-) pararem de adicionar valores continuamente a partir do momento que
// o botão do mouse deixa de ser segurado

document.addEventListener('mouseup', () => clearInterval(intervalId));

