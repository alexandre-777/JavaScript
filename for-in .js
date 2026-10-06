const carro = {
    marca : "Toyota",
    modelo : "corolla",
    ano : 2024,
    cor : "Preta"
};
for (const chave in carro) {
    console.log('${chave}: ${carro[chave]}');
}