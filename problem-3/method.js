//Implement a method which receives an array of integer and calculates and prints the
//average of all numbers in the list
function findAverage(array){
    let total = 0;
    for(let i=0; i< array.length; i++){
        total+= array[i];
    }
    const average = total/array.length;
    return average;

}

findAverage([1,2,3]) //returns 2