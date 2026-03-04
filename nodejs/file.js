import fs from "fs";

// Note : Always prefer async versions of functions in real applications. Sync methods block the event loop and freeze the server while the operation runs, which breaks scalability.


// +++++++++++++++ Creating file in Nodejs ++++++++++++



// Sync ..

// fs.writeFileSync("test.txt" , "Hello world Sync")

// Async ...

// fs.writeFile("test.txt" , "Hello world Async" , ((error)=>{}))




// +++++++++++++++   Reading files ++++++++++++++++




//Sync Way .........


//   const readfile = fs.readFileSync("./contact.txt" , "utf8")
//   console.log(readfile);


// Async Way .........

// const readfile = fs.readFile("./test.txt", "utf-8", (err, result) => {

//   if (err) {

//     console.log("Error", err);

//   } else {

//     console.log(result);

//   }

// });




// *******************  Appending File    *********************



// fs.appendFileSync("./contact.txt" , `UssianBolt : 97467789091 \n `)
// \n is for having new line 





// ********************** Copying File ********************


// fs.copyFileSync("./contact.txt" , "backup.txt")



// ++++++++++++++++++++++  Deleting File  ++++++++++++++++++++++++++++++


// fs.unlinkSync("./backup.txt")



// ************************ Rename File ****************


// fs.renameSync("./contact.txt" , "./info.txt")