/* 6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela. */

let teclado = require (`prompt-sync`)();
let matriz: number [][] = new Array(3);

for (let i = 0; i < 3; i++){
    matriz [i] = new Array(3);

    for (let j = 0; j < 3; j++){
        let numero: number = parseInt(teclado(`Digite os números de 0 a 9: `));
            matriz[i][j] = numero;

            if (numero >= 0 && numero <= 9){
               numero = 0
            }else {
                j--

            }
    }
}

console.log(matriz);
