/*

//loops arrays

const arr = [
  [[["1"], ["2"], ["3"]], { name: "Janett", age: 27 }],
  [["A", "B", "C"]],
];

arr[0][1].name = "Jordi"

for(let key in arr[0][1]){
    console.log(arr[0][1][key])
}
// array amarillo: 2 elementos rosa
    // array rosa 1:  2 elementos azules.
        //azul 1: es un array: 3 elementos lilas.
            //arrays lilas: 1 string verde (x3)
        // azul 2: es un objeto. 2 propiedades (name y age)
    //array rosa 2: 1 elemento
        //array azul 1: 3 elementos
            //string verde (x3)

for (let i = 0; i < arr.length; i++){
    //console.log(arr[i])
    for (let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j])
        
        for( let k = 0; k < arr[i][j].length; k++){
            //console.log(arr[i][j][k])
            for(let h = 0; h <arr[i][j][k].length; h++){
                //console.log(arr[i][j][k][h])
            }
        }

        
    }
}*/

const arrOb = [ "value 1", "value 2", "value 8", "value 5", "value 11"]

let str = "";

for(let i = 0; i < arrOb.length; i++){
    if(i === arrOb.length-1){
        str += arrOb[i] + "."
    } else if (i === arrOb.length-2){
        str += arrOb[i] + " y "
    }else {
        str += arrOb[i] + ", "
    }
}
console.log(str)
// loop en objetos

const objeto = {
  key1: "value 1",
  key2: "value 2",
  key3: "value 3",
  key4: "value 4",
};

let strng = "";

for(let key in objeto){
    if(key === "key4"){
        strng += objeto[key] + "."
    } else if (key === "key3"){
        strng += objeto[key] + " y "
    }else {
        strng += objeto[key] + ", "
    }
}
console.log(strng)