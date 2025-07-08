# INSERTION SORT
# -- Concept: 
Insertion sort builds the final sorted array (or list) one item at a time. It iterates through the input array and at each iteration, it removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. This process is repeated until no input elements remain.

# -- How it works (step-by-step):
Start from the second element: The first element is considered sorted by default (a list of one element is always sorted).
Pick an element: Take the current element you're considering.
Compare and Shift: Compare this element with the elements in the sorted portion of the array (to its left). If the current element is smaller, shift the larger elements to the right to make space.
Insert: Insert the current element into the correct position.
Repeat: Continue this process for all remaining unsorted elements.

# -- Time Complexity:
Best Case: O(n) (when the array is already sorted)
Average Case: O(n^2)
Worst Case: O(n^2) (when the array is sorted in reverse order)
Space Complexity: O(1) (in-place sort)

# -- When to use it:
For small datasets.
When the data is mostly sorted.
When stability is required (maintains the relative order of equal elements)

# SELECTION SORT
# -- Concept: 
Selection sort works by repeatedly finding the minimum element (or maximum, depending on the order) from the unsorted part of the list and putting it at the beginning (or end) of the sorted part.

It divides the input list into two parts:
A sorted sublist built up from left to right at the front (or right) of the list.
An unsorted sublist occupying the remainder of the list.

# -- How it works (step-by-step):
Find Minimum: In the unsorted portion of the array, find the element with the smallest value.
Swap: Swap this smallest element with the first element of the unsorted portion (which is effectively the current position you're trying to fill).
Move Boundary: The boundary between the sorted and unsorted portions moves one element to the right.
Repeat: Continue this process until the entire array is sorted.

# -- Time Complexity:
Best Case: O(n^2)
Average Case: O(n^2)
Worst Case: O(n^2)
Space Complexity: O(1) (in-place sort)

# -- When to use it:
For small datasets.
When memory writes are costly (it performs a minimum number of swaps compared to other O(n^2) sorts).

# BUBBLE
// Contoh Array: 23,98,67,45,12,24
// Prosedur: Ambil pasangan pertama dan tukar jika tidak berurutan dan ulangi sampai elemen terakhir diurutkan

// ###### iteration 1:
// step 1: 23,98,67,45,12,24
// step 2: 23,67,98,45,12,24
// step 3: 23,67,45,98,12,24
// step 4: 23,67,45,12,98,24
// step 5: 23,67,45,12,24,98

// result: we got last element sorted!!

// ###### iteration 2:
// step 1: 23,67,45,12,24,98
// step 2: 23,45,67,12,24,98
// step 3: 23,45,12,67,24,98
// step 4: 23,45,12,24,67,98

// result: we got second last element sorted!!

// ###### iteration 3:
// step 1: 23,45,12,24,67,98
// step 2: 23,12,45,24,67,98
// step 3: 23,12,24,45,67,98

// result: we got third last element sorted!!

// ###### iteration 4:
// step 1: 23,12,24,45,67,98
// step 2: 12,23,24,45,67,98

// hasil: kita mendapat array yang diurutkan!!