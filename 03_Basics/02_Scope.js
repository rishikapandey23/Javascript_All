//  Global Scope---------
//var c = 300

let a = 300

// Block Scope----
if(true){
    let a =10
    const b = 20
   // console.log("Inner:" , a)   
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "rishika"
    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);
    //two()

    // we can Access parent variable in child nested function.------
}
//one()

// --- We can Access child function(outer part of his Scope) in parent function..
if(true){
    const username = "rishika"
    if(username === "rishika"){
    const website = " youtube"
//console.log(username +  website);
}
//console.log(website);
}
//console.log(username);


//++++++++++++++++++++++Interesting+++++++++++++
// Hoisting... executing before declaring function

// this function supports
console.log(addone(5))
function addone(num){
    return num+1
}


// 2nd type --
// this function does not support hoisting.
//addTwo(5) -- error
const addTwo = function(num){
    return num+2
}
//addTwo(5)