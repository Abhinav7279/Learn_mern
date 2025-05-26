// console.log("hello word")
// const greetUser =(userName) =>{
//     console.log(`Welcome ${userName}`)
// }

// greetUser("Abhinav")
/**Learning File System using Node js
 * creating a file
 * fs.writeFile("file name", "file content", callbackz)
 */

const fs = require("node:fs")// CJS

const createFile = ()=>{
const fileName = "simple.txt";
const fileContent = "This file is created using Node";
const fileCb = (err)=>{
    console.log("File created successfully")
};
fs.writeFile(fileName,fileContent, fileCb);
}

/**
 * Read a file 
 * fs.readFile("fileName", callbackFn)
 */
const readFile = () => {
    fs.readFile("simple.txt", (err, data) =>{
    if(err){
        console.log("error reading file", err);
        return;
    }
    console.log(data.toString())
})
}
/**
 * Edit operation
 */
const editFile = ()=>{
    const fileContent = "\nContent line 2"
    fs.appendFile("simple.txt", fileContent, (err) =>{
        if(err){
            console.log("error appending data", err);
            return;
        }
        console.log("file append successfully")
    })
}
editFile();