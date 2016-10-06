function Fibonacci(n){
    var a = 0;
    var b = 1;
    for(var i = 3; i <= n; i++) {
        var f = a + b;
        a = b;
        b = f;
        return b;
     };
}


    document.write ( 'f1=' + Fibonacci(1) + '<br>');

    document.write ( 'f3=' + Fibonacci(3) + '<br>');

    document.write ( 'f5=' + Fibonacci(5) + '<br>');

    document.write ( 'f7=' + Fibonacci(7) + '<br>');
