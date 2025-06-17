/* 5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela. */

console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: string [][] = []; 
let coluna:number = 3
let linha: number = 3 

for (let z = 0; z < 3 ; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < 3; x++) {
        let nome: number= teclado (`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz: `);
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);