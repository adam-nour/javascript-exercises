const sumAll = function(min, max) {

    if(Number.isInteger(min) != true || Number.isInteger(max) != true) {
    return "ERROR"
    }
    else if(((min || max)<0)){
    return "ERROR"
    }else if(max>min){
    return ((max-min)+1) * (min + max) / 2;    
    }else{
    return ((min-max)+1) * (max + min) / 2; 
    }

};

// Do not edit below this line
module.exports = sumAll;
