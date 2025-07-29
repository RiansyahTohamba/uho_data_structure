function selectionSort(arr) {
    const n = arr.length;

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        // (which is at index 'i')
        if (minIndex !== i) { // Only swap if a new minimum was found
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Example usage:
let arr3 = [64, 25, 12, 22, 11];
console.log("Original array (Selection Sort):", arr3);
console.log("Sorted array (Selection Sort):", selectionSort(arr3)); // Output: [11, 12, 22, 25, 64]

let arr4 = [5, 1, 4, 2, 8];
console.log("Original array (Selection Sort):", arr4);
console.log("Sorted array (Selection Sort):", selectionSort(arr4)); // Output: [1, 2, 4, 5, 8]