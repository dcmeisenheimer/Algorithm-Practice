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
var container = document.getElementById('arrayBoxes');


//Determine how many random numbers can be stored in array
const count = 49;

//Determine the length of the area as the value in count (50).
var arrayNum = [count];

//A Loop to iteratate every time till i = count;
for(let i = 0; i < count; i++)
{
    var val = Number(Math.ceil(Math.random() * 1000));
    arrayNum.push(val);
}

//Sorting the existing array from small to large
arrayNum.sort(function(a,b) {
    return a-b
});
//target value to guess will be a random number within array index and stores the value of that index.
//const target = arrayNum[Math.floor(Math.random() * arrayNum.length)];

for (var i = 0; i < count; i++)
{
    var value = arrayNum[i];
    var array_ele = document.createElement('div');
    array_ele.classList.add('block');

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
}


var array_ele = document.createElement('div');
array_ele.classList.add('block');

var array_ele_label = document.createElement("label");
array_ele_label.classList.add("block_id");
array_ele_label.innerText = value;

// Appending created elements to index.html
array_ele.appendChild(array_ele_label);
container.appendChild(array_ele);

//Binary Search Method
async function BinarySearch(delay = 300) {
    var blocks = document.querySelectorAll('.block');
    var output = document.getElementById('text');

    var num = document.getElementById("fname").value;

    output.innerText = "";

    var min = 0;
    var max = arrayNum.length -1;
    var flag = 0; 

    while(min <= max){

        var guess = Math.floor((max + min) / 2);
        blocks[guess].style.backgroundColor = "#800000";

        var value = Number(blocks[guess].childNodes[0].innerHTML);
        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, delay)
        );
    
        if (value == num) {
            output.innerText = "Element Found";
            blocks[guess].style.backgroundColor ="#73A580";
            flag = 1;
            break;
        }
    
        if (value < num) {
            min = guess + 1;
            blocks[guess].style.backgroundColor = "#3E363F";
        }
    
        else {
            max = guess -1;
            blocks[guess].style.backgroundColor = "#3E363F";
        }
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
    
}

//Calling generateArray Function
