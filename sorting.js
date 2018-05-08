class Sorting {

   // Bubble Sort
   bubble_sort(arr){
      let len = arr.length, i, j, stop;
      for (i=0; i < len; i++){
          for (j=0, stop=len-i; j < stop; j++){
              if (arr[j] > arr[j+1]){
                  [arr[j+1], arr[j]] = [arr[j], arr[j+1]]  // swaping
              }
          }
      }
      return arr;
   }

   //insertion sort
   insertion_sort(arr){

      let i,j,len = arr.length;

      for (i = 1; i < len; i++)
      {
        if (arr[i] < arr[0])  // example [2,1]
        {
          //move current element to the first position
          let smallValue = arr.splice(i,1)[0];
          arr.unshift(smallValue);
        }
        else if (arr[i] > arr[i-1])  // example [1,2]
        {
          //leave current element where it is
          continue;
        }
        else {
          //find where element should go
          for (j = 1; j < i; j++) {
            if (arr[i] > arr[j-1] && arr[i] < arr[j])  // example [0,3,2]
            {
              //move element
              arr.splice(j,0,arr.splice(i,1)[0]);
            }
          }
        }
      }
      return arr;
   }

}

let arr = [1,0,45,-1,6,73,54];
let sorting = new Sorting();

let bubbleSorting = sorting.bubble_sort(arr);
console.log("Bubble sort", bubbleSorting);

let insertionSort = sorting.insertion_sort(arr);
console.log("Insertion sort", insertionSort);
