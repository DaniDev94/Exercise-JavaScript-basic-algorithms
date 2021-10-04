/*1.1------------------------------------------------------------------------>*/
for (let i = 0; i <= 9; i++){
    console.log(i);
}; 

/*1.2------------------------------------------------------------------------>*/
for (let i = 0; i <= 9; i++){
    if( i % 2 == 0 ){
        console.log(i);
    };
}; 

/*1.3------------------------------------------------------------------------>*/
//Prueba 1:
for(let i = 1; i <= 9; i++){
     console.log('Intentando dormir...')
};
console.log('Dormido!');

console.log("2--------------------------------------------------------------------");
//Prueba 2:
for(let i = 0; i < 10; i++){
    if(i === 9){
        console.log("Dormido!");
    } else {
        console.log("Intentando dormir...");
    };
};

console.log("3--------------------------------------------------------------------");
//Prueba 3:
for (let i = 0; i < 9;i++){
    if(i >= 0){
        console.log("Intentando dormir...");
    };
};
console.log("Dormido!!");

console.log("4--------------------------------------------------------------------");
//Prueba 4:
let txt = "Intentando dormir..";
for(let i = 1; i <= 10;i++){
    if(i == 10){
        txt = "Dormido!!";
    };
    console.log(txt);
};
console.log("5--------------------------------------------------------------------");
//Prueba 5:
for (let i = 0; i < 10; i++){
    if(i >= 0 && i < 9){
        console.log("Intentando dormir...");
    } else {
        console.log("Dormido...");
    };
};


