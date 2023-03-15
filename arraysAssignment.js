//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]
        //solution
arr1 = [3,7,34,90,12]
let lastElement = arr1.slice(-1)
console.log(lastElement)

arr2 = [true, "green", "where",12,56]
let last = arr2.slice(-1)
console.log(last)

//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];
        //Solution
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let stringed = myPets.toString()
console.log(stringed)

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
        //Solution
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var sorted = arr3.sort(function(x, y){return x - y});
console.log(sorted)

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
  //          "orange", "mango", "mango"];
                //Solution
let arr = ["apple", "mango", "apple","orange", "mango", "mango",];

    let unique_fruits = [new Set(arr)];
        console.log(unique_fruits);

function theDuplicates(arr){
        return(arr.filter((item, index)=>arr.indexOf(item) !== index));
            }
            console.log(theDuplicates(arr));


  
// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];
                //Solution
let arr5 = ["the", "way", "x", 4];
if (arr5[1]==["way"]){
    console.log("way")
}
else{
    (arr5[1]!=["way"])
        console.log("the search word was not found")
    
}




//Write a JS script to sort the following string
let given = "sevink"
console.log(given.split('').sort().join(''));




        




