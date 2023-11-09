const removeFromArray = function(array, ...valuesToRemove) {


// for(let i=0; i < array.length;i++){
//     let currentIndex = array[i];
//     if(array[currentIndex]==removeNumber){
//     newArray = array.slice(currentIndex,1);
//     return newArray

//     }
//     else{
//         currentIndex = currentIndex +1
//     }

// }
    // let newArray = [];
    // for (let i = 0; i < array.length; i++) {
    //   let currentIndex = array[i];
    //   if ((currentIndex !== removeNumber || currentIndex !== removeNumber1)) {
    //     newArray.push(currentIndex);
    //   }
    // }
    // return newArray;



        let newArray = [];
        for (let i = 0; i < array.length; i++) {
          let currentValue = array[i];
          if (!valuesToRemove.includes(currentValue)) {
            newArray.push(currentValue);
          }
        }
        return newArray;
      
}


// Do not edit below this line
module.exports = removeFromArray;
