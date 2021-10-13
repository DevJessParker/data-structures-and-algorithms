# Quick Sort

## Code Problem:

*Review the code below, then create a working algorithm to reach a working solution.*

Let's discuss the concept of Quick Sort. When you write and use and algorithm to Quick Sort an array, you are recursively calling the algorithm to perform a series of steps like so:

- Quick Sort takes in the arguments of an array, a starting index, and an end index.

&nbsp;
 > Why not take in just an array and sort the entire thing? Why take in a start index and an end index? Because we want our algorithm to be dynamic, we want the ability to sort only a section of an array, and we do not want to create any secondary arrays for this problem. We want the original array to be mutable, or changeable.

 &nbsp;

- Quick Sort will use three nested functions:
\
\
  i. The recursive function to call Quick Sort on itself.
\
\
  ii. A function to define a pivot point. This function returns an index based on a series of conditions.
\
\
  iii. A function we will use to swap values in the array based on a high/low comparison.

&nbsp;

### Step One = SWAP
&nbsp;

For this exercise, we will work from the innermost nested function and work our way outward. The array we want to Quick Sort will begin with the following values in the following order. 
```
array = [8, 4, 23, 42, 16, 15]
```
Let's start by creating a short algorithm which will dynamically swap two values in an array by taking in the arguments of the array, a first index, and a second index. Because we don't want to overwrite a value in the array and lose the value it will replace, we need to define a variable to temporarily store that value.
```
function swap(arr, i, j) {
  const temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

Great! Now we have a function that can dynamically swap two index values on our original array. Notice that we did *not* specify any greater-than or lesser-than comparisons in this function. Those conditions will be taken care of in our next code block.

### Step Two - PIVOT!

Referencing our nesting list above, we can see that we need a function that will define a pivot point. This means that we need to find an index that will act as a baseline for our Quick Sort.

> But what does this mean? Think of your pivot point as a divider. In our algorithm, all the values to the left of the pivot will be smaller than the value held at the index of the pivot. All the values to the right will be larger. The job of this function isn't to sort the entire array in one step. The magic happens when we use this function in a recursive way.

The job of this function is to perform the following steps:

- Since we've hinted that we will be comparing values, you may have already guessed we will need a loop. Correct!

- We will start the loop based on one of our original arguments - The starting index. REMEMBER: Do not assume your function will be sorting the entire array. Always reference your arguments in case you need to only sort PART of the original array. For the sake of this exercise, we *will* be sorting the entire array.

### Let's take a look

```
[8, 4, 23, 42, 16, 15]

Let's say we always want the furthermost right index to serve as our pivot and we want the initial index as the start of our loop (so the entire array for this example). The job of this nested function is to compare index[i] to index[pivot]. If index[i] is less than than pivot? It stays to the left and our loop moves forward. Is index[i] greater than pivot? Then we need to do some extra steps.
```
NOTE: You will need to reference two pivot variables here. One will hold the reference to the *initial* pivot index and one will point to a *new* pivot index for the next recusive call. The return of our pivot function (which we will call *partition*) is our new pivot index.

```
function partition(arr, start, end) {

  const initialPivot = arr[end];
  const newPivot = start - 1;

  for (i = start; i <= end - 1; i++) {
    if(arr[i] <= initialPivot) {
      newPivot++
      swap(arr, i, newPivot)
    } 
  }
  swap(arr, end, newPivot + 1)
  return(newPivot + 1)
}
```
**SEE SOMETHING FAMILIAR?**

We've called our swap function! The nesting begins! Pay close attention to how we reference and increment the newPivot index ***and how it is returned***. It can be easy to get lost in the variables and arugments being passed in nested functions. Hang in there.

## Step Three - That's a Wrap!

It's time to wrap our two nested functions in a recursive call. By nature, we need to make sure we set a condition in a recursive function to avoid an infinite loop.

``` 
function _quickSort (arr, start, end) {
  
  if (start < end) {

    const position = partition(arr, start, end);

    _quickSort(arr, start, position - 1);
    _quickSort(arr, position + 1, end);
  }
}
```

Each time we call the function recursively, we are passing through mutated start and end arguments that are based on the return of the previously called partition() function. Since the partition function is called recursively, it allows us to section out our array into bite sized pieces, sort according to an updated pivot value, and then return a new pivot index until the entire array has been sorted (which happens when our first conditional statement no longer evaluates to true).
