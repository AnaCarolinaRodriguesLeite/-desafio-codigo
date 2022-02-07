function selectionSort(array){
    for (var i = 0; i < array.length; i++) {
      let menor = i;
      for (var j = i + 1; j < array.length; j++) {
        if (array[menor] > array[j]){
          menor = j;
        }
      }
      if(i !== menor){
        [array[i], array[menor]] = [array[menor], array[i]];
      }
    }
    return array;
  }
let remove = array => [...new Set(array)];
console.log(remove(selectionSort([8, 5, 10, 5, 2, 4, 4, 3])))