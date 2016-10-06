function Fibonacci(){
    var a = 0;
    var b = 1;
    var f = 1;
    for(i = 0; i <= 10; i++) {
        f = a + b;
        a = b;
        b = f;
        return f;
        document.write(""+f+"<br>"); 
     };
}
