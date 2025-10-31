// adding + 10 on each and ever number of an array using both foor loop And Map


//  ********************** Using Maps *****************


const allthenums = [1,2,3,4,5,6,7,8,9,10]

// const afteradding = allthenums.map ( (adding10toEachofThem) => {return adding10toEachofThem + 10 } )
// console.log(afteradding);


// ******************** Using For Each ************************


const  somenums = [1,2,3,4,5,6,7,8,9,10]

somenums.forEach ( (afteradding) => {console.log(afteradding + 10);})


// ******************************************************************************


// ChainingIn Js 
// Each .map() passes its result to the next one in the chain.

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums

      .map ((nums) =>  nums * 10 ) // here the value of nums would be 1 , 2 , 3 and soo on 
      .map ((nums) => nums + 1 )  // here the value of first chain is passed to the second 10 , 20 , 30 ..
                      


// console.log(newnums); // and here at the end the value woul be the total of these stuff 


//  11 , 21, 31, 41, , 51, .......

// tldr ; first map would multiply 10 to each values where 1 becomes 10 2 becomes 20 and so on 
// and the second map would add 1 to each of those values 1 to 10 , 1 to 20 and it becomes 11 , 21 and so on 



// ****************************************************************************************
// also we could chain as much we want to for eg 






const totalnums = [1,2,3,4,5,6,7]


const aftermath = totalnums
             .map ((math) => {return math *10})
             .map ((math) => {return math + 1})
             .map ((math) => {return math + 3})
             .filter ((math) => {return math>50})


console.log(aftermath);


// out put would be 54,64, and 74 
// first map would do *10 to eaach of the element of array like 1*10 , 2*10 and so on 
// 2nd map would add 1 to each of those value after output of first one like 10 + 1 , 20 +1
// 3rd one would add 3 to all those like 11 + 3 , 21+3 
// and last filter says that i need value greater than 50 so its displays 54,64,74 as an output
