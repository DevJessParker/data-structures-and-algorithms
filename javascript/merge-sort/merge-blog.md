# Merge Sort

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

Consider the above pseudocode. Let's step through the algorithm.

We know by the pseudocode that we are:

- Defining an algorithm called mergeSort that takes in an array.
- We are intializing a variable ```n``` with the value of ```arr.length```
- If our array is longer than 1 index, we will execute a following code block:
- Initialize a ```mid``` variable that is equal to half the length of our array.
- Initialize a ```left``` variable equal to all indexes to the left of ```arr[mid]```
- Do the same thing with a ```right``` variable and the indexes to the right of ```arr[mid]``` extending to the end of our array.
- Call mergeSort recursively on itself and sort the left.
- Call mergeSort recursively on itself and sort the right.
- Invoke the ```merge``` function which will compare a left value to a right value, and then place the values in the correct index of arr when merging the values back together.

## Important

Calling mergeSort on itself recursively results in multiple arrays with a length of 1. We are essentially splitting our original array in half with each call, until each index is its own array with a length of 1. Because an array with a length of 1 is already sorted, we then rebuild the original array with a sorted order by comparing the former index values.