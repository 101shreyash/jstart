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

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


