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



// ********************************************************************************************



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// In real-world apps, this data often comes from:
// A backend API (like a REST or GraphQL API)
// Or a database (like MongoDB, MySQL, Firebase, etc.)


// So in these values i just want history Books 


let userBooks = books.filter (  (historyBooks) =>  { return historyBooks.genre === 'History'} )
console.log(userBooks);



// output


// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ] 

// we've accesed all the history Books we want from our 
// Database Values which we're in the form of an array with Object Inside it





// *************************************************************


// now the user asked us to give all the books that were published after 2000






 userBooks = books.filter ( (publishedDate) => {return publishedDate.publish >= 2000 })
 // here we are reassigning to the same varible named userBooks Cause FrontEnd Mofos would use this same 
 // varible called userBooks


 console.log(userBooks); 
 // alright now we could get all the books published after 2000
 // which is book5 and book8 published on 2009 and 2011 respectively



//  ************************** AND OPERATOR USE CASE IN REDUCE **********************

 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


 const HistoryBookies = books.filter ( (HistoryBooks) => {return HistoryBooks.genre === "History"  && HistoryBooks.publish < 1990 })

console.log(HistoryBookies); // we could use &&  Inorder to get multiple Values 
// lets says we were making a webpage for car so we could filter multiple Parameters such as 
// car colour &&  cartype && CarModel && Carbrand using " AND OPERATOR "
