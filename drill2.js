// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. 
// After the first partition step has been completed, the contents of the array is in the following order: 
// 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

//! [3, 9, 1, 14] < [17] > [24, 22, 20]
// [3, 1] 9 [14]

// The pivot could have been 17, but could not have been 14 //! FALSE Could have been 14
// The pivot could have been either 14 or 17 //! TRUE <-- !!!
// Neither 14 nor 17 could have been the pivot //! FALSE Both 14 and 17 could've been pivot
// The pivot could have been 14, but could not have been 17 //!FALSE 17 could've been pivot

//******************************************************************************************

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
// show the resulting list after the second partitioning according to the quicksort algorithm.

//? When using the last item on the list as a pivot
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 [PIVOT 12]
//  j                   i //! 10 < 12, Swap i(10) and j(14)
// 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
//      j                  i //! 3 < 12, Swap i(3) and j(17)
// 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
//         j                   i //! 16 > 12, Advance i
// 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
//         j                      i //! 9 < 12, Swap i(9) and j(17)
// 10, 3, 9, 15, 19, 14, 17, 16, 13, 12
//            j                       i 
//! i is at end, we now know i(12) and j(15) can be swapped and 12 will now have all lesser values to the left and greater values to the right

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}


function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

//? When using the first item on the list as a pivot
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
