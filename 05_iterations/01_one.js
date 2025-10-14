// ******** First of All  As Usual  Lets talk about block scope a bit

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


console.log(index); 
// we could'nt acess index here cause its inside a block Scope 
// we've alredy talk about this alot so lets move with ForLoop what is it and how would we gonna use it 







// // FOR LOOP

 for (let i = 0; i <= 5; i++) {
     const element = i;

     if (element === 4) {
        // console.log("4 is the Jersey Number of Sergio Ramos");
            
     }
//     console.log(element);
    
    
 }



// ***********************************Nested LOOP  ***********************************************

 for (let i = 1; i <=10; i++) {

//     console.log(`Outer Loop Value ${i}`);
    
   for (let j = 1; j <=10; j++) {
//        console.log(`Inner Loop Value ${j}`);
        
        
    }
    
 }


// *************************************************************


const Hobbies = ["Chess", "Calasthenics", "ReadingGreatBooks", "EmbeedSystem&Electronics"]

for (let i = 0; i < Hobbies.length; i++) {
    const element = Hobbies[i];
    //console.log(element);
    
    
}


// ---------------------------------------- break and continue -----------------------------------


for (let index = 1; index <=20; index++) {

    if (index === 7) {
        // console.log("Siuuuuuuuuu");
         
        break
        
    }
    // console.log(` num ${index}`);
    
    
}




// ---------------------------------------------
for (let index = 1; index <=20; index++) {

    if (index === 7) {
        console.log("Siuuuuuuuuu");
         
        continue
        
    }
    console.log(` num ${index}`);
    
    
}