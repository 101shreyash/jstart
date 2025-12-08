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

 const afterMath = totalNums.reduce((acc,cv) => {return acc + cv} , 5)
 console.log(afterMath);
 


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

 
 const BooksIhveGot  = [

     {ItemName : "CantHurtme" ,  Price : 599},
     {ItemName : "theGayScience" ,  Price : 799},
     {ItemName : "WealthOfNation" ,  Price : 699},
     {ItemName : "NeverFinished" ,  Price : 720},
     {ItemName : "SameAsEver" ,  Price : 435},
     {ItemName : "benjaminFranklinBiography" ,  Price : 1699},
     {ItemName : "ZeroToOne" ,  Price : 599},
     {ItemName : "SteveJobsBiography" ,  Price : 1299},
     {ItemName : "NeverFinished" ,  Price : 650},
     {ItemName : "AnimalFarm" ,  Price : 199},
     {ItemName : "Alcheimist" ,  Price : 199},
     {ItemName : "You2" ,  Price : 299},
     {ItemName : "AtomicHabit" ,  Price : 799},
     {ItemName : "TheSecreat" ,  Price : 599},
     {ItemName : "TuesdayWithMorrie" ,  Price : 499},


 ]


 const TotalPrice = BooksIhveGot.reduce ((accumulator , items) => accumulator + items.Price , 0)

 console.log(TotalPrice); // total price : 10093
 