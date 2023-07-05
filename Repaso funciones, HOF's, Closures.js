const { useCssModule } = require("vue");

function saludar(name) {
  return `hola ${name}`;
}

const saludar2 = (name) => {
  return `hola ${name}`;
};

const saludar3 = (name) => `hola ${name}`;

console.log(saludar("Edu"));
console.log(saludar2("Maite"));
console.log(saludar3("Dani"));
// console.log(saludar("Maite"))

// const saludoMaite = saludar("Maite")
// const saludoFrancisco = saludar("Francisco")

// console.log(saludoFrancisco)

function suma(x) {
  return x + 2;
}

function resta(y) {
  return y - 2;
}

function multiply(z) {
  return z * 2;
}

function division(k) {
  return k / 2;
}

//-----------

const sum = (x) => {
    return function result(y) {
      return x + y;
    };
  };
  
  
  const resultado = sum(2)
  console.log(resultado(4))
  

const rest = (x) => {
    return function result(y){
        return x - y
    }
}


const resultado2 = rest(4)
console.log(resultado2(2))



const mult = (z) => {
    return function result(y){
        return z * y
    }
};



const resultado3 = mult(10)
console.log(resultado3(2))

const div = (z) => {
    return function(y){
        return z / y
    }
}

const resultado4 = div(4)
console.log(resultado4(2))




const students = ["Janett", "Stephanie", "Edu", "Maite", "Francisco", "Estel", "Isabel"]


// ["Hola Janett", "hola Stephanie",...]

const saludos = students.map((e) => `hola ${e}`)

console.log(saludos)


