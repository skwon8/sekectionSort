//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

const selectionSort = (arr) => {
    let bigIndex = 0;

    for (j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length - j; i++) {
            // compare the current value with the value at the largest index so far to see if the current value is larger
            if (arr[i] > arr[bigIndex]) {
                // update the big index to be the current index
                bigIndex = i;
            }
        }
        // swap the value at the big index with the value at the last index (arr.length - 1)
        [arr[bigIndex], arr[arr.length - 1 - j]] = [arr[arr.length - 1 - j], arr[bigIndex]] //  destructure swap!!!!!!
        // let temp = arr[bigIndex]
        // arr[bigIndex] = arr[arr.length - 1 - j]
        // arr[arr.length - 1 - j] = temp
    }
    return arr;
}


console.log(selectionSort([4, 8, 5, 2, 1, 0, 9, 7]))