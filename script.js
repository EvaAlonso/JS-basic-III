//1-Escribe una función que tome dos números como argumentos y devuelva su suma.
function add(a, b){
  return a + b;
}
//2-Escribe una función que tome dos números como argumentos y devuelva su resta.
function subtraction(a, b){
  return a - b;
}
subtraction(17, 76);
//3-Escribe una función que tome dos números como argumentos y devuelva su producto.
function product(a, b){
  return a * b;
}
product(17, 76);
//4-Escribe una función que tome dos números como argumentos y devuelva su división.
function division(a, b){
  return a / b
}
division(17, 76);
//5-Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function power(a, b){
  return Math.pow(a, b);
  //return a ** b; 
}
//6-Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function remainder(a, b){
  return a % b;
}
//7-Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function squareRoot(a){
  return Math.pow(a, 1/2);
}
//8-Escribe una función que tome un número como argumento y devuelva su valor absoluto.
function absolute(a){
 return Math.abs(a)
}
//9-Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
function round(a){
  return Math.round(a);
}
//10-Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function random(){
  return Math.random();
}

/* STRINGS */
//1-Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concat(string1, string2){
  return string1.concat(" ", string2);
  
}
//2-Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function length(string1){
  return string1.length;
}
//3-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
function upperCase(string1){
  return string1.toUpperCase();
}
//4-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function lowerCase(string1){
  return string1.toLowerCase();
}
//5-Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function character(string1, index){
 return `La letra que tiene la posición ${index} en la palabra ${string1} es ${string1.at(index)}`;
}
//6-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
function reverse(string1){
  return string1.split("").reverse().join("");
} 
//7-Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function countCharacter(string1, character){
  let count = 0;
  for( let i = 0; i < string1.length; i++){
   if (string1[i] === character) {
    count++;
   }
  }
  return `El carácter ${character} se repite ${count} veces en la palabra ${string1}`
}
countCharacter("esternocleidomastoideo", "o");
//8-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function withoutWhiteSpace(string1){
  return string1.trim();
}
//9-Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function isPalindrome(string1){
  return string1.toLowerCase() === string1.toLowerCase().split("").reverse().join("") ? true : false;
}
//10-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
function capitalize(sentence){
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");

}

/* ARRAYS */
//1-Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function sumArrayElements(arr){
  let initialValue = 0;
  let sumElements = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sumElements;
}
//2-Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos. 
function promArrayElements(arr){
  let initialValue = 0;
  let sumElements = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return `El valor promedio de los números del array es ${sumElements/arr.length}`;
}
//3-Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function ascendent(arr){
  function compare(a,b){
    return a - b;
  }
  return arr.sort(compare);
}
//4-Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function biggerThan(arr, a){
  const bigger = arr.filter(number => number > a);
  return bigger;
}
//5-Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
function twoArr(arr1, arr2){

}
//6-Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
//7-Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
//8-Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
//9-Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
//10-Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
function reverse(arr){
  
}

/* OBJETOS LITERALES */
//1-Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
//2-Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
//3-Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
//4-Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
//5-Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
//6-Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
//7-Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
//8-Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
//9-Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto
//10-Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.