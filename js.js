const raceCar = "racecar";
const notRacecar = "motorcycle"

const isPalindorme = (word) => {

    const split = word.toLowerCase().split("")
    let n = split.length;

     for(let i = 0; i <= n - 1; i++){
    
        if(split[i] !== split[split.length-1-i]){
            return false;
        }
       
     }
     return true;  

  
}

isPalindorme(raceCar)

//i = 0, split[i] = r;
//i = 1, split[1] = a
//i = 2, split[2] = c
//i = 3, split[3] = e
//i = 4, split[4] = c
//i = 5, split[5] = a
//i = 6, split[n-i] = r;

