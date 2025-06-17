/* 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/
 
let teclado = require (`prompt-sync`)();
let matriz: number[][] = [];
let adição: number = 0

for (let i = 0; i < 6; i++){
    matriz[i] = [];

    for (let j = 0; j < 6; j++){
        let num: number = parseInt(teclado(`Digite o número que vai estar no [${i} e ${j}] da matriz: `));
        matriz[i][j] = num;
        
        if (j % 2 == 0){
            adição += matriz [i][j];
        }
    }
} console.log(matriz);
console.log(`O resultado da soma das colunas pares é: `);
