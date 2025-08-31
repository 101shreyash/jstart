// ************************Object de-structure & JSON API ***********************

 const course = {
    courseName : "The Completejs Course 2025",
    coursePrice : 27000,
    courseInstructor : "Jonas Schmedtmann."

 }
//  console.log(course.courseInstructor); // Jonas Schmedtmann.

// This works fine, it's the normal way of accessing object properties.


// const {courseInstructor} = course
// console.log(courseInstructor ); // Jonas Schmedtmann.

const {courseInstructor, courseName, coursePrice} = course
console.log(courseInstructor, courseName, coursePrice ); // Jonas Schmedtmann. The Complete js Course 2025 27000



// This is called object destructuring. Both are correct syntax,
// but destructuring is cleaner when you need multiple properties.
// Instead of writing course.courseInstructor, course.coursePrice, etc.
// again and again, you can pull them out in one shot.
 
// *********************** Javascript Object Notation (JSON) ***************

//  {
//  "name" : "Shreyash", 
//  "twitter" : "shreyashtwts" 
//  }

 // In JSON, all keys must be in double quotes " ".
// Single quotes ' ' or no quotes at all = invalid JSON.
// Also In JSON You can’t console.log(name) directly, it’s just text.
// JSON = pure data in text form, not a variable, not alive in memory
// JS Object = JSON assigned to a variable, now alive in memory and usable in code
// Key takeaway: JSON is static text, JS object is dynamic datain-action


[
  {"name": "Shreyash"},
  {"age": 17},
  {"hobby": "liftingheavyshits"}
]

 