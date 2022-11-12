//Binary Search Algorithm in C#
/*Pseudocode:
1. Let 'min' = 0 & 'max' = n-1
2. compute 'guess' as the average of 'max' and 'min', rounded down (so that its is an integer)
3. if 'array[guess]' = 'target', then stop. You found it! Return 'guess'.
4. if the guess was too low, that is, 'array[guess]' < 'target', then set min = guess + 1.
5. Otherwise, the guess was too high. Set 'max' = 'guess' - 1.
6. Go back to step 2
 */
//Selects the container class div
const container = document.querySelector('.container');

//Selects the content div
const content = document.querySelector('.content');

//Creating a new class for title of webpage
content.classList.add('intro');

//assiging text value to intro class
content.textContent = 'Binary Search';

//Determine how many random numbers can be stored in array
const count = 49;

//Determine the length of the area as the value in count (50).
let arrayNum = [count];

//A Loop to iteratate every time till i = count;
for(let i = 0; i < count; i++)
{

    arrayNum[i] = Math.floor(Math.random() * 1000) + 1;
}

//target value to guess will be a random number within array index and stores the value of that index.
const target = arrayNum[Math.floor(Math.random() * arrayNum.length)];

//Sorting the existing array from small to large
arrayNum = arrayNum.sort(function(a,b){return a-b});

//boxes for each array value
const arrayBoxes = document.getElementById("arrayBoxes");

//creating a list item for each value in the sorted array
arrayNum.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    arrayBoxes.appendChild(li);
});

let min = 0;

let max = arrayNum.length -1;


while(min <= max){
    let guess = Math.floor((max + min) / 2);

    console.log('\nMin Array Guess: ' + arrayNum[min] + ' Min Array Number: ' + min);
    console.log('Min Array Guess: ' + arrayNum[max] + ' Min Array Number: ' + max);
    console.log('Guess Number:' + arrayNum[guess] + ' Guess Index: ' + guess);

    if (arrayNum[guess] == target) {
        console.log('\nThe guess: ' + arrayNum[guess] + ' The Target: ' + target)
        break;
    }

    else if (arrayNum[guess] < target) {
        console.log('\nThe target is more than ' + arrayNum[guess]);
        min = guess + 1;
    }

    else {
        console.log('\nThe target is less than ' + arrayNum[guess]);
        max = guess -1;
    }
}
