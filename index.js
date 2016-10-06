var result, i;
var sum1 = 0, sum2 = 1; // 0 and 1
    if (n == 0) return sum1;    //result for 0
    if (n == 1 || n == -1) return sum2;    //result for 1
    if (n > 0) {              //for positive numbers
        for ( i = 2; i <= n; i++) {
            result = sum1 + sum2;
            sum1 = sum2;
            sum2 = result;
        }
    }else{                //for negative numbers
        for(i = -2; i >= n; i--){
            result = sum1 - sum2;
            sum1 = sum2;
            sum2 = result;
        }
    }
    return result;
    
var n =+ prompt('Input the number','');
alert('Fibonacci munber for ' + n + ' is ' + fib(n));