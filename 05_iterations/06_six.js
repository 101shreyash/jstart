const thingsido = ["Calasthenics", "Meditation", "Bookreading", "prograamming", "Maths", "Cycling"]

 const whatido = thingsido.forEach (  (item) => {

    // console.log(item);
    
}  )

// console.log(whatido); // undefined 
// The variable 'whatido' will be undefined because forEach does not return a new array




// ******************************** Filters In JS *********************************

const numsfrom1to10 = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10 ]


const newNumbers = numsfrom1to10.filter (  (number) => { return number < 5 }  )

console.log(newNumbers); 

// when we would open scope {} like this we must write return 
// or wise we could simply write like this ((number) => number<5)
