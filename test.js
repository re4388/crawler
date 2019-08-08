
let arr = []
let obj = {
    x: 5, 
    y: 6
}

console.log(JSON.stringify(obj))


arr.push(JSON.stringify(obj))
arr
let arr1 = arr.toString()
arr
arr1

console.log(typeof arr)
console.log(typeof arr1)



// arr.push(JSON.stringify(obj));
//         });

// // save into file
// console.log(arr.toString());
// fs.writeFile('data.txt', arr, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("success");
//     }