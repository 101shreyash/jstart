// Immediately Invoked Function Expression. (IIFE)


(function smtg (){
    console.log("Database Connected"); // named IFFIE (has name = smtg)
    
} ());  // here semicolon is must it shows end of the code this stuff if often not sugg by code editor


( () => {
    console.log("Database connected too");
    
} ) () // using arrow function syntax in this case you might be get lot of confussion 
// unnamed IFFIE


// Reasons to Write IIFE : 
// 1. Run code immediately (like “connect database as soon as app starts”).
// 2. Avoid polluting global scope → keeps variables private inside that function.

((name)=>{console.log(`His name is ${name}`);
}) ("Shreyash") 