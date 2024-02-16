// Immediately Inviked Function Expression(IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})(); // --- two IIFE in one function by semicolon(;)

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`)
})('rishika')

