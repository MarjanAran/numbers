function fibonacci(n){
    var a = 1;
    var b = 1;
    for(var i = 3; i <= n; i++) {
        var f = a + b;
        a = b;
        b = f;
        return b;
     };
}



    document.write ( 'f3=' + fibonacci(3) + '<br>');

    document.write ( 'f5=' + fibonacci(5) + '<br>');

    document.write ( 'f7=' + fibonacci(7) + '<br>');
