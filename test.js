console.log("hello world");
console.log(999+111);
console.log("999"+"111");
console.log(typeof("999"));
console.log(typeof(999));
console.log(parseInt("999"));
console.log(parseFloat("999.99"));
console.log(Number("999"));
console.log(String(999));
// this coment
let a=10;
console.log(a);
a=11;
console.log(a);
//const pi=3.14158;
pi=3.14158;
console.log(pi);

let b=100;
console.log(b);
b=200;
console.log(b);

let num=10;
if (num%2==0){
    console.log("even")
}
else{
    console.log("add")
}

for (i=0;i<10;i++){
    console.log(i)
}
for (i=0;i<10;i++){
    console.log(i*2)
}

i=0;
while(i<0){
    console.log(i)
    i++
}

i=5;
console.log("downfall")
do{
    console.log(i);
    i++
}while(i<10)

function add(a,b){
    return a+b
}
console.log(add(10,20))