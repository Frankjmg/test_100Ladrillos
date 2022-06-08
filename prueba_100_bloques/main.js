//se crea la matriz
const matrix = [
  [0, 15, 2, 1],
  [8, 9, 8, 5],
  [3, 3, 16, 7],
  [12, 5, 22, 5],
];

const diagonalSum = function (matrix) {
  //console.log(matrix);

  let diagonal1 = 0;
  let diagonal2 = 0;
  let valor_absoluto = 0;

  //primera diagonal
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i] == matrix[j]) {
        diagonal1 += matrix[i][j];
      }
    }
  }
  //console.log(diagonal1);

  //aqui como sabemos la variable j solo debe de ir disminuyendo conforme la variable i aumenta, esa es la relacion entre ambos indicadores
  //para cada uno de los valores buscados en la diagonal 2, creo se puede hacer con un solo ciclo pero no estoy seguro. (el ciclo de arriba).
  for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
    diagonal2 += matrix[i][j];
  }
  //console.log(diagonal2);

  valor_absoluto = Math.abs(diagonal1 - diagonal2);
  return console.log(valor_absoluto);
};

diagonalSum(matrix);

//funcion de hulk.
const hulkFunction = function (n) {
  let par = "I hate that";
  let impar = "I love that ";
  let cadena = [];

  //condicion base
  if (n == 1) {
    console.log("I hate it");
  } else {
    //condicion de desarrollo para n!=1
    for (let i = 0; i < n - 1; i++) {
      cadena += i % 2 == 0 ? par + " " : impar;
    }

    if (n % 2 == 0) {
      cadena += "I love it";
    } else {
      cadena += "I hate it";
    }

    console.log(cadena);
  }
};

hulkFunction(5);
