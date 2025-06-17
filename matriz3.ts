/* 3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas. */ 

console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: number [][] = [];
let coluna:number = 2
let linha: number = 3

for (let z = 0; z < 2 ; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < 3; x++) {
        let nome: number= teclado (`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz: `);
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);