// FOR EACH LOOP (IS HIGHER ORDER ARRAY LOOP )

// for...of → simple, clean, works with break/continue. Fast for loops where you might need control.
// forEach → functional, modern, can’t use break or continue. Good for clean one-liners or callbacks.
// If you need flexibility, go for...of.
// If you want readable functional style, go forEach.

// you can call forEach a higher-order loop
//  because it loops over an array and takes a function as input.



// ***************** USING Function Declaration *****************


const hobbies = ["Chess", "DistanceRunning" , "Programming", "Calasthenics", "Reading"]


hobbies.forEach(function (item) {
    // console.log(item);
    
} ) 

// ************************* USING ARROW FUNCTION ************************

const thingsidoinmeantime = ["mathsOviously", "VideosOfSamOvens", "podcastofLexFriedman", "VideosByYC"]

thingsidoinmeantime.forEach ((thisisparameter) => {console.log(thisisparameter);
});



// ****************************************************************

// const whatsnext = ["Save10k", "getbetterGrades", "BuyCohort", "6months9hoursgrind", "Workingout365days"]


// whatsnext.forEach ((items , index) => {console.log(items,index);
// })


// forEach doesn’t just give you the current item in the array (here called 'items')
// It can also provide additional info like the 'index' of the item, and even the full array if you want
// (Optional) you can add a third parameter to get the whole array




// ***********************  Most Common scenario is we used to have an obj inside arrays **************
// and we need to iterate it 


const programmingLanguage = [

    {
        progLangName : "Javascript",
        progFileName : "js"
    },

    {
        progLangName : "Python",
        progFileName : "py"
    },

    {
        progLangName : "Rust",
        progFileName : "rs"
    }
]

programmingLanguage.forEach ( (item) => {console.log(item.progFileName);
} ) 

// This code loops through an array of programming language objects 
//  Useful when you get dynamic data from a database or API 
// and want to perform some action (like displaying it, logging it, or updating UI) 
// way to iterate over all elements when we don’t need a new array in return.
