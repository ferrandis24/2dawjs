let dataArray = [1,2,3,4,5]
let x = 8
function linearSearch (dataArray, x) {
  for (let i = 0; i < dataArray.length; i++) {
      if (x == dataArray[i]) {
         return true 
      }
      
  } 
  return false  
}

let result=linearSearch(dataArray, x)
console.log(result);
 

