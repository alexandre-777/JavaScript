let resultadoDado;
let lancamento;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6 ) + 1; //Gera um número aleatorio de 1 a 6
    lancamento++;
    console.log('lancamento ${lancamento}: Resultado do dado: ${resultadoDado} ');
}

console.log('Finalmete! O número 6 foi obtido após ${lancamento} lançamentos');