// const a = "Hola!"

// function global(){
//     const b = "Qué "
//     // console.log(c)
//     return function local(){
//         const c = "tal?"
//         return a + b + c
//     }
// }

// // console.log(global()())
// const saludo = global()
// console.log(saludo())

// ------------

// function createBank(saldo) {
//   let balance = saldo;
//   console.log(balance);
//   return balance;
// }

// const cuentaIrene = createBank(200);
// console.log("cuento tiene Irene en el banco?", cuentaIrene);

// function createBank(x) {
// 	let balance = x;
// 	return function(newAmount) {
// 		balance += newAmount;
// 		return balance > 0 ? "$$" : "OVERDRAWN";
// 	}
// }
// const sofiaBankTransactions = createBank(100);
// console.log(sofiaBankTransactions(50)); // $$
// console.log(sofiaBankTransactions(20)); // $$
// console.log(sofiaBankTransactions(-300));

// --------------------------

// function creacionDeContraseña(contraseña) {
//   let password = contraseña; //"Irene"
//   return function compruebaContraseña(intento) {
//     //"Irene"
//     if (intento === password) {
//       //"Irene(password, primer nivel) === "Irene" (segundo nivel)contraseñaIrene(intento)
//       return "contraseña ok: has hecho login correctamente";
//     } else {
//       return "contraseña errónea: Vuelve a probar";
//     }
//   };
// }

// const contraseñaIrene = creacionDeContraseña("1234")
// console.log(contraseñaIrene("piña"))
// console.log(contraseñaIrene("1222"))
// console.log(contraseñaIrene("1234"))

// const contraseñaIrene = creacionDeContraseña("Irene");
// const contraseñaStephanie = creacionDeContraseña("4321");
// const contraseñaDani = creacionDeContraseña("651");
// const contraseñaEdu = creacionDeContraseña("789");

// console.log(contraseñaDani("642"));
// console.log(contraseñaDani("651"));
// console.log(contraseñaEdu("789"));
// console.log(contraseñaStephanie("642"));
// console.log(contraseñaStephanie("4321"));
// console.log(contraseñaIrene("Irene"));

// function createPasswordChecker(newPassword) {
// 	let password = newPassword;
// 	return function checkPassword(guess) {
// 		return guess === password;
// 	}
// }
// const checkSofiaPassword = createPasswordChecker("123");
// console.log(checkSofiaPassword("333")); // false
// console.log(checkSofiaPassword("123")); // true

// -------------------------

// function makeAdder(x) {
//   return function add(y) {
//     return x + y;
//   };
// }

// // console.log(makeAdder(4)(2)(1))
// const suma = makeAdder(4);

// console.log(makeAdder(4)(10));
// console.log(suma(4));
// console.log(suma(2));
// console.log(suma(10));
// console.log(suma(40));

// ---------------------------

// let count = 0

// function contador() {
//   let count = Math.floor(Math.random() * 10);

//   if (count < 10) {
//     return function increase() {
//       return ++count;
//     };
//   } else {
//     return function decrease() {
//       return --count;
//     };
//   }
// }

// console.log(contador()());

// const invContador = contador();
// console.log(invContador());

// ***---***

// const sum = (x) => {
//     return x + 5
// }
// const result = sum(5)
// console.log(result)
// --------------

// function miFuncion() {
//     let count = 1
//     function contador() {
//         count++
//         console.log(count)
//     }
//    setInterval(contador, 2000)
// }
// miFuncion()

const opcionUsuaria = 4

const numero1 = 10;
const numero2 = 2;

function calculadora(x) {
  let opcion = x;

  if (opcion === 1) {
    return function suma(numero1, numero2) {
      return numero1 + numero2;
    };
  } else if (opcion === 2) {
    return function resta(numero1, numero2) {
      return numero1 - numero2;
    };
  }else if (opcion === 3) {
    return function multiplicacion(numero1, numero2) {
        return numero1 * numero2
    }
  }else if (opcion === 4) {
    return function division(numero1, numero2) {
            return numero1 / numero2
        
        
    }
  }
}


const operacionCalculadora = calculadora(opcionUsuaria)


console.log(operacionCalculadora(numero1,numero2))




function suma(x){
    return function parametro2(y){
        return x + y
    }
}

const resultadoSuma = suma(4)



console.log(resultadoSuma(8))


console.log(suma(4)(8))