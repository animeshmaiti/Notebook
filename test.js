const obj ={a:24,b:56,c:{d:45}};
const {a}=obj;// a 24
const {c:{d:e}}=obj;// e 45
const {g}=obj;//g undefined
console.log(a);
