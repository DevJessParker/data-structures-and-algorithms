# Insert to Middle of an Array
Accept arguments of array and value. Insert value at center index of array.

## Whiteboard Process
![Whiteboard 01](/array-insert-shift/01-array-insert-shift.jpg)

## Approach & Efficiency
Dividing array length by two, then using Math.ceiling to generate the nearest whole integer. This becomes the middle index. Then, splice the given value at the middle index without deleting any other value.