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
const arrNub = [100, 52, 32, 95, 2, 35, 101]
function maxElementof(arr) {
  console.log(`El número máximo dentro de array es ${Math.max(...arr)}`)
};
maxElementof(arrNub);

//7-Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
function minElementof(arr) {
  console.log(`El número mínimo dentro de array es ${Math.min(...arr)}`)
};
minElementof(arrNub);
//8-Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
const arrCountElement = ["manzana", "pera", "pera", "plátano canario", "higos", "fresa", "fresa", "limón", "uva", "uva", "uva"];

function countElement(arr, element){
  
  }
//   console.log(`el elemento ${element} se repite ${acc} veces`);
    
  
  

countElement(arrCountElement, "uva");

//9-Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
//Método con filter
const arrDuplicateElement = ["manzana", "pera", "pera", "plátano canario", "higos", "fresa", "fresa", "limón", "uva", "uva", "uva"];
function eliminateDuplicateWithFilter(arr){
  let noDuplicate = arr.filter((item, index) => arr.indexOf(item)=== index)
  console.log(noDuplicate);
};
//Método con Set (permite solo guardar valores únicos)
function eliminateDuplicateWithSet(arr){
  const setArr = new Set(arr);
  let noDuplicateSet = [...setArr];
  console.log(noDuplicateSet);
};
//Método con Reduce
function eliminateDuplicateWithReduce(arr){
  const noDuplicateReduce = arr.reduce((acc, item) => {
    if(!acc.includes(item)){
      acc.push(item);
    }
    return acc;
  },[])
  console.log(noDuplicateReduce);
}
eliminateDuplicateWithFilter(arrDuplicateElement);
eliminateDuplicateWithSet(arrDuplicateElement);
eliminateDuplicateWithReduce(arrDuplicateElement);
//10-Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
const arrReverse = [" codeando", " más", " disfruto", " vez", " cada"];
function reverse(arr){
  console.log(arr.reverse());
  console.log(arr.join("") + " 😊");
}
reverse(arrReverse);

/* OBJETOS LITERALES */
//1-Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
const characterName = {
  firstName:  "Anakin",
  lastName: "Skywalker",
}
function takeName(){
  return `El nombre del personaje es ${characterName.firstName}`
}
takeName();
//2-Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
const ageCharacter = {
  firstName: "Jane",
  age: 73,
}
function updateAge(newAge){
  ageCharacter.age = newAge;
  return ageCharacter;
}
updateAge(55);
//3-Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
function addNewProperty(obj, string1){
  obj[string1] = null;

  return obj
}

let objNewProperty = {
  firstName:  "Powerpuff",
  secondName: "Girls"
}
let string1 = "Superpower";
addNewProperty(objNewProperty, string1);
//4-Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

let deleteObj = {
  name: "Kitty",
  age: 14,
  eyesColor: "blue"
}
string2 = "eyesColor";
function deleteProperty(obj, string2){
  delete obj[string2]
  return obj
}
deleteProperty(deleteObj, string2);

console.log(deleteObj);
//5-Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
function countProperties(obj){
  let count = 0;
  for (let property in obj){
    if (obj[property] ){
      ++count;
    }

  }
  return `El objeto tiene ${count} propiedades`
}
let countObj = {
  una: "a",
  dos: "b",
  tres: "c",
  cuatro: "d",
  cinco: "e",
  seis: "f",
}
countProperties(countObj);

//6-Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
function propertyInObject(obj, string3){
  if( string3 in obj){
    return `La propiedad ${string3} está en el objeto`
  }else {return `La propiedad ${string3} no pertenece al objeto`}
}
let propertyObject = {
  problem1: "i don't have enough imagination ",
  problem2: "to create so many diferent object",
  problem3: "for so many diferent exercises",
  solution: "I'm just fooling around 😂"
}
let string3 = "surname";
propertyInObject(propertyObject, string3)

//7-Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
let valuesObject = {
  firstName: "Eva",
  secondName: "Sonia",
  surname: "Alonso",
  age: 49,
  
}
function createArrayWithValuesObject(obj){
  return Object.values(obj);
}
createArrayWithValuesObject(valuesObject);

//8-Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
//No me sale algo hago mal
const obj4 = {
  a: 1,
  b: 2,
  c: 3,
}
const obj5 = {
  c: 5,
  d: 6,
  e: 7
}
const obj6 = {
  a: 1,
  b: 2,
  c: 3,
}
function compareObjects(obj4, obj6){
  return Object.keys(obj4) === Object.keys(obj6) 
}

//9-Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto
function cloneObject(obj){
  return structuredClone(obj)
}
let originalObj = {
  firstName: "Eva",
  secondName: "Sonia",
  age: 49,
  passion: "code",
}
let cloneOfOriginalObj = cloneObject(originalObj);
cloneOfOriginalObj.newProperty = "let's see if they are diferents objects";
console.log(originalObj);
console.log(cloneOfOriginalObj);

//10-Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
}
const obj2 = {
  c: 5,
  d: 6,
  e: 7
}
//option 1 with Object.assign
function mergeObjects(obj1, obj2) {
  let obj3 = Object.assign({}, obj1, obj2);
  return obj3
}
mergeObjects(obj1, obj2)
//option 2 with spread operator
function mergeObjectsSpreadOperator(obj1, obj2){
  let obj4 = {...obj1, ...obj2};
  return obj4
}
mergeObjectsSpreadOperator(obj1, obj2)