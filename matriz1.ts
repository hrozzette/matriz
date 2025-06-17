console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: string [][] = []; // declarando matriz 
let coluna:number
let linha: number

// z percorre as linhas
for (let z = 0; z < 3 ; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z 
    minhaMatriz[z] = [];

    for (let x = 0; x < 4; x++) {
        // Atribuição via entrada de dados manual na variavel nome
        let nome: string = teclado (`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz: `);

        // Atribui nome na minhaMatriz do endereço dado por z e x 
        minhaMatriz[z][x] = nome;
    }
}      
// Imprime a matriz
console.log(minhaMatriz);
