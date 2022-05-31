console.log("node app app.js");
const fs= require('fs');
const os =require('os');
const _=require('lodash');
const yargs=require('yargs');

const note=require('./notes');
var user= os.userInfo();

// console.log(res);
// console.log(_.isString(true));
// console.log(_.isString('true'));
// var arr=_.uniq([1,2,1,3,1,5]);

const titleoptions=
    {
        describe : 'title of the note'
        ,
        demand : true ,//node app.js add -t="mohmad" --body="sabri"
        alias : 't'
    }


const argv=yargs.command('add','add new note',{
    title:titleoptions,
    body:{
        describe : 'body of the note'
        ,
        demand : true ,//node app.js add -t="mohmad" -b="sabri"
        alias : 'b' 
    }
}).command('list','to list all notes').command('read','read a note',{
    title:titleoptions ////node app.js read -t="mohmad"

}).command('remove','remove a note by title',{
    title:titleoptions
}).help().argv;
// console.
// console.log(arr);
var command =argv._[0];
//console.log(process.argv);

//console.log("this argv module  ",argv);

if(command==='add'){

var temp=note.addnote(argv.title,argv.body);
if(temp){
console.log('not created');
note.lognote(temp);

}
else{
console.log('note title token');
}
}




else if(command==='list'){

 var allnotes= note.getall();
console.log(`number of notes : ${allnotes.length}`);
allnotes.forEach((notes)=>note.lognote(notes));
} 
else if(command==='read'){
   
    var temp3=note.getnote(argv.title);
if(temp3){
    console.log('note found');
note.lognote(temp3);

}
else{
    console.log('note not found');
}
} 
else if(command==='remove'){ 

 var temp2=note.removenote(argv.title);
 var message=temp2 ?'node was removed':'node not found';
 console.log(message);
}
else console.log("no thing written printed");
//console.log(user);
// fs.appendFile('greetings.txt',`hello ${user.username} ! and its age = ${note.age}`,(err)=>{if(err)console.log("unable to write on file");});