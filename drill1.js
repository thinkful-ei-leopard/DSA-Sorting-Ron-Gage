// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// [21, 1] [26, 45]  [ 29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// [1, 21] [26, 45] [29] [28] [2] [9]  [16] [49] [39] [27]  [43] [34] [46] [40]

//       [1] and [21]

// Which two lists would be merged on the 7th merge?
// [34] and [43]

//0  1  2   3   4   5   6  7  8   9   10  11  12  13  14  15
// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

// Recursive Run 0
// [ 21, 1, 26, 45, 29, 28, 2, 9 ]   [16, 49, 39, 27, 43, 34, 46, 40]
// Recursive Run 1
// [21, 1, 26, 45] [ 29, 28, 2, 9]   [16, 49, 39, 27, 43, 34, 46, 40]
// Recursive Run 2
// [21, 1, 26, 45] [ 29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
// Recursive Run 3
// [21, 1] [26, 45]  [ 29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
// Recursive Run 4
// [21, 1] [26, 45] [29, 28] [2, 9]  [16, 49, 39, 27] [43, 34, 46, 40]
// Recursive Run 5
// [21, 1] [26, 45] [29, 28] [2, 9][16, 49] [39, 27] [43, 34, 46, 40]
// Recursive Run 6
// [21, 1] [26, 45] [29, 28] [2, 9][16, 49] [39, 27] [43, 34] [46, 40]
// Recursive Run 7
// [21] [1] [26, 45] [29, 28] [2, 9][16, 49] [39, 27] [43, 34] [46, 40]
// Run 8
// [21] [1] [26] [45] [29, 28] [2, 9][16, 49] [39, 27] [43, 34] [46, 40]
// Run 9
// [21] [1] [26] [45] [29] [28] [2, 9][16, 49] [39, 27] [43, 34] [46, 40]
// Run 10
// [21] [1] [26] [45] [29] [28] [2] [9][16, 49] [39, 27] [43, 34] [46, 40]
// Run 11
// [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39, 27] [43, 34] [46, 40]
// Run 12
// [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27] [43, 34] [46, 40]
// Run 13
// [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27]  [43] [34] [46, 40]
// Run 14
// [21] [1] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27]  [43] [34] [46] [40]
// Return Chain (Recursive Run 15)
// [1, 21] [26] [45] [29] [28] [2] [9]  [16] [49] [39] [27]  [43] [34] [46] [40]
// Return Chain (Recursive Run 16)
// [1, 21] [26, 45] [29] [28] [2] [9]  [16] [49] [39] [27]  [43] [34] [46] [40]


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}