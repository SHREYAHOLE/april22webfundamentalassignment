let n= parseInt(prompt('enter the number:'));

function getNthPrimeNumber(n){
    let count = 1;
    let num = 2;
    while(count++ != n){
      num = getNextPrimeNumber(num);
    }
    return num;
  }
  
  function getNextPrimeNumber(n){
    for(let i = ++n; i< n*n; i++){
      if(isPrime(i)) return i
    }
    return 0;
  }
  
  function isPrime(n){
    for(let i = 2; i< n; i++)
      if (n%i===0) 
        return false;
    return true;
  }
  
  console.log(getNthPrimeNumber(n))
 