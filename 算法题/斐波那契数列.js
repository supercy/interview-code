function fibonacci(n) {
    let arr = [0,1];
     for(let i=2;i<n+1;i++){
         arr.push(arr[i-1]+arr[i-2])
     }
     console.log(arr);
     return arr[n]
  }
  console.log(fibonacci(10));