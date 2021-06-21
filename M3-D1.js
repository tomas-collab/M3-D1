/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function addValue(a,b){
     if(a === b){
         return 3*(a+b)
     }else{
         return a + b
     }
}
console.log(addValue(3,3))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/ 
function checkFifthy(a,b){
    if(a === 50 || b === 50 || a+b === 50){
        return 'true'
    }else{
        return 'false'
    }
}

console.log(checkFifthy(50,60))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removeCharacter(str,charPosition){
    x = str.substring(0,charPosition)
    y = str.substring(charPosition+1, str.length)
    return x + y
    
}
console.log(removeCharacter('strive',3))
/*

4)
 Create a function to find the largest of three given integers.
*/
function findLargest(a,b,c){
    if(a>b && a>c){
        return a
    }else if( b>a & b>c){
       return b
    }else{
        return c
    }
}
console.log(findLargest(3,4,5))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function whichRange(a,b){
 if ((a<=60 && a>=40) && (b<=60 && b>=40)){
     return `${a} and ${b} are in the range of 40..60`
 }else if((a<=100 && a>=70) && (b<=100 && b>=70)){
    return `${a} and ${b} are in the range of 70..100`
 }else{
     return 'out side of the question scope but working on it'
 }
}
console.log(whichRange(40,60))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

function makeCopies(n){
    let str = 'strive'
    return str.repeat(n)
}
console.log(makeCopies(3))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function displayCity(a){
    if(a.slice(0,3) === 'Los' || a.slice(0,3) === 'New'){
        return a
    }else{
        return ''
    }
}
console.log(displayCity("LosAngeles"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sumValue(a){
   return a[0] + a[1]+ a[2]
}
console.log(sumValue([1,2,3]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function hasNum(a){
for(let i =0; i<a.length;i++){
    if(i===1 || i ===3){
        return 'True'
    }
}
}

console.log(hasNum(['1','2']))


// 10)

// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
function hasNum(a){
    for(let i =0; i<a.length;i++){
        if(i!==1 || i !==3){
            return 'True'
        }
    }
    }
    
    console.log(hasNum(['1','2']))


// 11)

// Create a function to find the longest string from a given array of strings.


// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

function typeOfAngle(a){

    if(a>=0 && a<90){
        return 'acute angle'
    }else if(a===90){
        return 'Right angle'
    }else if(a>90 && a<180){
        return 'Abtuse angle'
    }else if(a===180){
        return 'Straigt angle'
    }else {
        'idk'
    }
}

// 13)

// Create a function to find the index of the greatest element of a given array of integers
function maxElement(a){
    let max  = a[0]
    let maxIndex = 0
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        maxIndex = i
        max = arr[i]
    }
}
return maxIndex

}

// 14)

// Create a function to get the largest even number from an array of integers.
function largestEven(a){
   a.sort((x,y) => y-x)
   for(let i=0;i<a.length;i++){
    if(a[i]%2===0){
       return a[i]
    }
}
}

// 15)

// Create a function to check from two given integers, whether one is positive and another one is negative.
function negativeOrPositive(a,b){
if ((a < 0 && b > 0) || a > 0 && b < 0) {
    return 'true'
}else{
    return 'false'
}
}

// 16)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

function creatNewString(a){
   a.slice(0,3)
}


// 17)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC


