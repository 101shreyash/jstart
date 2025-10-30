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






const nums9to14 = [9,10,11,12,13,14,15]

const afterstuff = nums9to14

      .map ((nums) =>  nums * 10 )
      .map ((nums) => nums + 1 ) 
      .filter ((nums) => nums > 100 )

      console.log(afterstuff); 

      // output would be  [ 101, 111, 121, 131, 141, 151 ]
      // tldr , each value of array is multiplied by 10 and each value after multipliaction is added by 1 
      // and there we create a filter saying i need nums greater than 100
      