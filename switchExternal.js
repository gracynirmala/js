function dayOfTheWeek(){
    var val;
    val=parseInt(document.getElementById("wday").value);
    switch(val){
        case 1:
            document.write("monday is the first day");
            break;
        case 2:
            document.write("tuesday is the second day");
            break;
        case 3:
                document.write("wednesday is the third day");
                break;
        case 4:
             document.write("thusday is the fouth day");
            break; 
         case 5:
                document.write("friday is the fifth day");
                break;
         case 6:
                document.write("saturday is the sixth day");
                break; 
        case 7:
                document.write("sunday is the seventh day");
                break;
         default:
            document.write("Invalid output");                
    }
}