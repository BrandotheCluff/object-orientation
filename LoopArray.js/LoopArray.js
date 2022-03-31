let rangeArray = [1, 4, 11, 2, 37, -4, 8, -6, 14, 109]

   let min = rangeArray[0]; 
   let max = rangeArray[0];

  for(let i = 0; i < rangeArray.length; i++){
   
    if( min > rangeArray[i] ){
      min = rangeArray[i];
    }
  if( max < rangeArray[i]){
      max = rangeArray[i];
  }
  }
console.log('min is ' + min)
console.log('max is ' + max)