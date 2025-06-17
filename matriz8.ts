/* 8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra. */

let teclado = require (`prompt-sync`)();
let matriz: number [][] = new Array(3);

for (let i = 0; i < 3; i++){
    matriz [i] = new Array(3);

    for (let j = 0; j < 3; j++){
      let numero: number =  Math.floor(Math.random() * 20);
            matriz[i][j] = numero;

            }
    }


console.log(matriz);

