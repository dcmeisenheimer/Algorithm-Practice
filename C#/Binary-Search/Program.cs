using System.Security.Cryptography;
using System.Data;
//Binary Search Algorithm in C#
/*Pseudocode:
1. Let 'min' = 0 & 'max' = n-1
2. compute 'guess' as the average of 'max' and 'min', rounded down (so that its is an integer)
3. if 'array[guess]' = 'target', then stop. You found it! Return 'guess'.
4. if the guess was too low, that is, 'array[guess]' < 'target', then set min = guess + 1.
5. Otherwise, the guess was too high. Set 'max' = 'guess' - 1.
6. Go back to step 2
 */

 //Random Number Sorted Array Generator and Target Value:

//Object to create random numbers
Random rnd = new Random();

//Determine how many random numbers can be stored in array
int count = 50;

//Determine the length of the area as the value in count (50).
int [] arrayNum = new int[count];

//A Loop to iteratate every time till i = count;
for(int i = 0; i < count; i++)
{
    //array index i = a random number between 1 & 1000;
    arrayNum[i] = rnd.Next(1,1000);
}

//target value to guess will be a random number within array index and stores the value of that index.
int target = arrayNum[rnd.Next(arrayNum.Length)];

//Sorting the existing array from small to large
arrayNum = arrayNum.OrderBy(x => x).ToArray();

//Method Declaration
BinarySearch(target, arrayNum);


/* Binary Search Method*/
void BinarySearch(int target, int [] arrayNum)
{
    System.Console.Write("The Elements of Sorted Array: ");
    
    //Call Method for printing sorted array
    PrintArrayNumbers(arrayNum);
    int min = 0;
    //Max equals the length of the area - 1 (max = n - 1)
    var max = arrayNum.Length - 1;
    int guess;

    //Loop through every number in the sorted array
    while(min <= max)
    {
        //Guess equals the average of max and min
        guess = (max + min) / 2;
        System.Console.WriteLine("\nMin Array Guess: " + arrayNum[min] + " Min Array Number: " + min);
        System.Console.WriteLine("Max Array Guess: " + arrayNum[max] + " Max Array Number: " + max);
        System.Console.WriteLine("Guess Number:" + arrayNum[guess] + " Guess Index: " + guess);
        
        //Checks if guess value equals target
        if(arrayNum[guess] == target)
        {
            System.Console.WriteLine("\nThe guess: " + arrayNum[guess] + " The Target: " + target);
            break;
        }
        //Checks if guess value is less than target
        else if (arrayNum[guess] < target)
        {
            System.Console.WriteLine("\nThe target is more than " + arrayNum[guess]);
            //Min will equal the next value after guess
            min = guess + 1;
        }
        //Checks if guess value is higher than target
        else 
        {
            System.Console.WriteLine("\nThe target is less than " + arrayNum[guess]);
            //Max equals the previous value before guess
            max = guess - 1;
        }


    }
}

//Prints all the numbers in the sorted array
void PrintArrayNumbers(int [] arrayNum)
{
    foreach (var item in arrayNum)
    {
        System.Console.Write(item + " ");
    }
    System.Console.WriteLine();
}