//for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}


const greetings ="Hello world!"
for(const greet of greetings){
    console.log(`each char is ${greet}`)
}


//Maps----Unique Value

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"Frannce")
map.set('IN',"India")
//console.log(map);

for(const [str, value] of map){
    console.log(str,'=',value);
}

const myObject ={
    game1:'NFS',
    game2: 'spiderman'
}
// for(const [str, value] of myObject){
//     console.log(str, '=', value);
// }


