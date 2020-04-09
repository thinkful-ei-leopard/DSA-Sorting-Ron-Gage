// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
// You can't use arr.splice(), shift() or unshift() for this exercise. 
// [4, 5, 6, 7, 20, 3, 12]
// Min=3 Max=20

// bucketSort(arr[], n)
// 1) Create n empty buckets (Or lists).
// 2) Do following for every array element arr[i].
// .......a) Insert arr[i] into bucket[n*array[i]]
// 3) Sort individual buckets using insertion sort.
// 4) Concatenate all sorted buckets.

// if we know the know the max, we know the maximum amount of buckets to create
const results = bucketSort(arr, min, max);
//console.log(results);
const min = 3;
const max = 20;
const arr = [4, 5, 6, 7, 20, 3, 12];

bucketSort(arr, min, max) {
    // create  a map that has a bucket number equal to our max
    let bucketCount = Math.floor((max - min) / arr.length + 1);
    //                            20  -  3   /   7        + 1   =>  17 / 8 => 2.125

}





function createHashMap(){
  let myMap = new Map();

  myMap.set(4);
  myMap.set(5);
  myMap.set(6);
  myMap.set(7);
  myMap.set(20);
  myMap.set(3);
  myMap.set(12);
    
  return myMap;
}

const hashmap = createHashMap();
// eslint-disable-next-line no-console
console.log(hashmap);


// myMap.size;

// myMap.get(5);


/************************************************** */
// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

const books = ['abc', 'bbb', 'zd', 'erd', 'ycz', 'fgw', 'ghw', 'mno', 'ttt', 'bade', 'abaab', 'nstst', 'qqweq'];

// 

function sortBooks(arr) {

}
Process node => recursively left => recursively right (go back to parent)
25, [15, 10, 4, 12, 24, 18, 22,] [50, 35, 31, 44, 70, 66, 90]
[15, 10, 4, 12, 24, 18, 22,]
15 [10, 4, 12,] [24, 18, 22]

                            25
                          15  50
                        10 24
                       4 12 1822

recurively left => process node => recursively right (go back to parent)
 [4, 10, 12, 15, 18, 22, 24, ]25, [31, 35, 44, 50, 66, 70, 90]
 [4, 10, 12,] 15, [18, 22, 24, ]
                             25


recursively left => recursively right => process node (go back to parent)
[4, 12, 10, 22, 18, 24, 15,] [31, 44, 35, 66, 90, 70, 50,] 25
[4, 12, 10,][22, 18, 24,]15 [31, 44, 35] [66, 90, 70] 50

                        25