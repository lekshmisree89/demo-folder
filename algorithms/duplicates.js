//find the duplicatesin an array


  // function duplicates(arr){
  //   let duplicates = [];
  //   let obj = {};
  //   for(let i=0;i<arr.length;i++){
  //     if(obj[arr[i]]){
  //       obj[arr[i]]++;
  //     }else{
  //       obj[arr[i]] = 1;
  //     }
  //   }
  //   for(let key in obj){
  //     if(obj[key]>1){
  //       duplicates.push(key);//push() method adds new items to the end of an array, and returns the new length.
  //     }
  //   }
  //   return duplicates;
  // }


  const arr =['e','f' ,'e','hello','hello'];
  function dupe(arr){
    let dupes= [];
    let obj ={};

    for(let i=0;i<arr.length;i++){

      if(obj[arr[i]]){
        obj[arr[i]]++;;

      }else{
        obj[arr[i]]=1;
      }
    }
      for (let key in obj){
        if(obj[key]>1){ 
          dupes.push(key);
        }
      }
      return dupes;
    }

  console.log(dupe(arr));

  function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();//set is a collection of values, where each value may occur only once.
    for (let char of arr) {
        if (seen.has(char)) {//has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
            duplicates.add(char);//add() method adds a specified element to the end of a Set object.
        } else {
            seen.add(char);
        }
    }
    return Array.from(duplicates);
    //Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
}

console.log(findDuplicates(arr));

