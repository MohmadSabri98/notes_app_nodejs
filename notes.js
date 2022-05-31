console.log('starting note.js');
const fs =require('fs');
const { pick } = require('lodash');
let nodesarr=[];
module.exports.age=25;
var fetchnode=()=>{
    try{
        var stringobj=fs.readFileSync('notes-data.json');
        nodesarr=JSON.parse(stringobj);
        }
        catch(e){
            console.log("some thing went error");
        }
}
var saveing =(data)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(data,null,2),{encoding:'utf8',flag:'w'}) ;
}

var addnote=(title,body)=>{
var note={
    title,body
};
fetchnode();
var deplicate =nodesarr.filter((node)=> node.title===title)
if(deplicate.length===0){
nodesarr.push(note);
saveing(nodesarr);
return note
}


// fs.appendFile('notes-data.json', JSON.stringify(note), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
};
var getall = ()=>{
    fetchnode();
    return nodesarr;
};


var getnote = (title)=>{
fetchnode();
var temp =nodesarr.filter((node)=>node.title===title);
return temp[0];

}

var removenote = (title)=>
{
    fetchnode();
    var temp=nodesarr.filter((node)=> node.title!==title)
    saveing(temp);
    return nodesarr.length1 !== temp.length
 


};
var lognote= (note)=>{
    console.log('--'.repeat(12));
    console.log(`title : ${note.title}`);
    console.log(`body : ${note.body}`);
}
module.exports={
addnote,
getall,
getnote ,
removenote,
lognote
};