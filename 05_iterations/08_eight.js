 const numsFromOneToSix = [1,2,3,4,5,6] 
 const holds = numsFromOneToSix.reduce ((accumulator , currentValue) => accumulator + currentValue , 0) 
 console.log(holds); 



// prints 21 
// // acc - 0 
// // current value - 1 
// // acc - 1 
// // current value - 2 
// // acc - 3 
// // current value - 3 
// // acc - 6 
// // current value - 4 
// // acc - 10 
// // current value - 5 
// acc - 15 
//  current value - 6 
// // acc - 21 // current value ;
 
 
// +++++++++++++++++++++++ OR To UnderStand It Even More We Can Learn In this way ++++++++++++++




const totalNums = [1,2,3,4,5,6,7,8,9]

 const after = totalNums.reduce((acc,cv) => {return acc + cv} , 5)
 console.log(after);
 


 // acc 5 + 1 = 6 acc
 // acc 6 + 2 = 8 acc
 // acc 8 + 3 = 11 acc
 // acc 11 + 4 = 15 acc
 // acc 15 + 5 = 20 acc
 // acc 20 + 6 = 26 acc
 // acc 26 + 7 = 33 acc
 // acc 33 + 8 = 41 acc 
 // acc 41 + 9 = 50 acc 
 
//  *************************************************************************************************
 
 // calculating total cost of items in the shopping Cart using Reduce prototype of An Array

 
 const section101Books = [

    {bookName : "tuesdayWithMorrie" , price : 450},
    {bookName : "SameAsEver" , price : 400},
    {bookName : "AtomicHabit" , price : 700},
    {bookName : "AnimalFarm" , price : 250},
    {bookName : "CantHurtMe" , price : 700},
    {bookName : "NeverFinished" , price : 700},
    {bookName : "you2" , price : 250},
    {bookName : "Sapiens" , price : 500},


]

const afterMath = section101Books.reduce((acc , cv) => {return acc + cv.price} , 0 )
console.log(afterMath);


// acc - 0 + 450 - acc - 450
// acc - 450 + 400 acc - 850
// acc - 850 + 700 -  acc 1550
// acc - 1550 + 250 - acc 1800
// acc - 1800 + 700 - acc 2500
// acc - 2500 + 700 - acc 3200
// acc - 3200 + 250 - acc - 3450
// acc - 3450 + 500 - acc - 3950

// total Price of these book Would be 39550