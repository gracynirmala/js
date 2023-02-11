function sum(){
    var a,sum=0,i;
    a=parseInt(document.getElementById("num").value);
    for(i=1; i<=a;i++){
        sum=sum+i;
    }
    document.getElementById("result").innerHTML="the sum of "+a+" is "+sum;
}