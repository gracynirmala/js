 function factorial() {
    var a, fact,i;
    a=parseInt(document.getElementById("num").value);
    fact=1;
    for (i=1; i <= a; i++) {
        fact = fact*i;
              
    }   
    document.getElementById("Answer").innerHTML="Factorial of "+a+" is: "+fact;
}