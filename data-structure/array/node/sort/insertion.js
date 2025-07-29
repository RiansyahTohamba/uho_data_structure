function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i]; // The element we want to insert
        let j = i - 1; // Start comparing with the element to its left

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }
        arr[j + 1] = current; // Insert the current element into its correct position
    }
    return arr;
}

// Example usage:
let arr1 = [12, 11, 13, 5, 6];
console.log("Original array (Insertion Sort):", arr1);
console.log("Sorted array (Insertion Sort):", insertionSort(arr1)); // Output: [5, 6, 11, 12, 13]

let arr2 = [5, 1, 4, 2, 8];
console.log("Original array (Insertion Sort):", arr2);
console.log("Sorted array (Insertion Sort):", insertionSort(arr2)); // Output: [1, 2, 4, 5, 8]