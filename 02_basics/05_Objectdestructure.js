// ************************Object de-structure & JSON API ***********************

 const course = {
    courseName : "cohort3",
    coursePrice : 5999,
    courseInstructor : "Harkirat"

 }
//  console.log(course.courseInstructor); // Harkirat

// This works fine, it's the normal way of accessing object properties.


// const {courseInstructor} = course
// console.log(courseInstructor ); // Harkirat

const {courseInstructor, courseName, coursePrice} = course
console.log(courseInstructor, courseName, coursePrice ); // Harkirat cohort3 5999



// This is called object destructuring. Both are correct syntax,
// but destructuring is cleaner when you need multiple properties.
// Instead of writing course.courseInstructor, course.coursePrice, etc.
// again and again, you can pull them out in one shot.
 