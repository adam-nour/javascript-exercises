const fibonacci = function(fibonacciIndex) {
    array= [0,1];
if((parseInt(fibonacciIndex)) >0){
   for( i=2;i<=fibonacciIndex;i++){
    
    array.push(array[i-1]+array[i-2]);
    
    }
    }else{
        return "OOPS"
    }
    
    return array[fibonacciIndex];

};

// Do not edit below this line
module.exports = fibonacci;
