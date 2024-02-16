const user = {
    username : "rishi",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sujal"
// user.welcomeMessage()
//console.log(this);

// We cann't Access (this.) in function ----

// function chai(){
//     let username = "rishika"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "rishika"
//     console.log(this.username);

// }

//--------ARROW FUNCTION----

// const chai = () => {
//         let username = "rishika"
//         console.log(this);
    
//  }
//  chai()

// --ARROW FUNCTION WITH PRAMETERS---

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }


//___ARROW FUNCTION WITH Implicite  return___
//const addTwo = (num1, num2) => num1+num2
// OR------
// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({username:"rishika"}) // -- object return wrap in ({})...

console.log(addTwo(4,5))

//const myarray = [2,5,7,8,9]
//myarray.forEach()




    
