// var obj={
//     name:'mohmad'
// };
// var jsonobj= JSON.stringify(obj);
// console.log(typeof jsonobj);
// console.log(jsonobj);


// var person='{"name":"sabri","age":25}';
// var personjs= JSON.parse(person);
// console.log(typeof personjs);
// console.log(personjs);

const fs=require('fs');
var originnote={title:'some body',body:'somebody'};
var strorigin= JSON.stringify(originnote);
fs.writeFileSync('note.json',strorigin);
var note =JSON.parse(fs.readFileSync('note.json'));
console.log(typeof note);
console.log(note.title);


