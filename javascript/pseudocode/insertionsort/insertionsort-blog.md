# Insertion Sort

PESUDOCODE:


``` 
InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

Let's step through this function.

Right away, we can walk through and see the following:

We are defining a function called INSERTIONSORT which takes in an integer and an array.

The word FOR lets us know we're building an iterative FOR loop that loops through our entire array.

The word WHILE tells us we have a nested loop.

We also see that we will be holding temporary values.

By looking at this function, we can see that we will be sorting an array in place by performing a nested loop on every index of the given array.

## Walkthrough

```array = [5, 4, 7, 2, 9]```

### What happens in our FOR loop at each index?

- We will be evaluating the value located at ```array[i]```
- We will reassign our j variable to equal a number resulting from i - 1 (used later to reference an index)
- We will assign ```arr[i]``` to a temporary variable
- We will enter our WHILE loop
- While the value of j is greater than or equal to zero AND our temporary variable's value is less than the value of ```arr[j]``` the current value of ```arr[i]``` will be set to the value of ```arr[j]```
- The value of j will be reassigned to equal j - 1
- The value of ```arr[j + 1]``` will be reassigned to equal the value of our temporary variable.

