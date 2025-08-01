// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
    //beginanswer
    let swapped = false; //Untuk memeriksa apakah array sudah diurutkan; kemudian return;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
				//elemen bertukar
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
    //endanswer return arr
}

function rotateLeft(d, arr) {
    //beginanswer
    length = arr.length;
    let result = arr.slice(d, length);
    for (let i = 0; i < d && i < length; i++) {
        result.push(arr[i]);
    }
    return result
    //endanswer return arr
}

let nums = [4, 5, 2, 1, 3]
let sorted = sort(nums)
console.log(sorted)
rotated = rotateLeft(4, sorted)
console.log(rotated)

module.exports = { sort, rotateLeft }