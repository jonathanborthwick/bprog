function gbi(id){
    var elem = document.getElementById(id);
    return elem;
}

function reverse(){
    var itsValue = gbi("toReverse").value;
    console.log("Value: ",itsValue);
    var reversed = rev(itsValue,0);
    gbi("reverseResult").innerHTML = reversed;
    var classes = gbi("message").getAttribute("class");
    console.log("classes:",classes);
    gbi("message").removeAttribute("class");
    var classSplits = classes.split(" ");
    var leaveNonHideClasses = "";
    for(var i = 0; i<classSplits.length; i++){
        var thisClass = classSplits[i];
        if(thisClass != "hide"){
            leaveNonHideClasses +=thisClass;
            if(i < classSplits.length-1){
                leaveNonHideClasses+=" ";
            }
        }
    }
    gbi("message").setAttribute("class",leaveNonHideClasses);
}

function rev(soFar, count){
    console.log("asString: " + soFar );
    console.log("count: " + count);
    var len = soFar.length;
    var ret = soFar;//ret needs to be a reference to soFar
    if(len > count){
        var subd = soFar.substring(1,len);
        var first = soFar[0];
        //we want to inject the first letter at the index position one back from the length, minus what the count is at this point
        var indexOfInsert = len-1 - count;//so if count is 0 and length is 5, we want 4 (4 -0)
        var asArray = subd.split("");
        asArray.splice(indexOfInsert,0,first);
        count++;
        var asString = "";
        //recreate as string, not array - the default toString() makes this a comma delimited string. It is best toi just recreate it in a loop
        for(var i = 0; i<len; i++){
            asString+=asArray[i];
        }
        ret = rev(asString,count);//ret always needs to be reasigned
    }
    //only get here when count is greater than the length of the original string
    return ret;//will always be a reference to soFar, which is being reasigned in the recursive loop
}

//test
/*
var reversed = rev("Sophie",0);
console.log("result",reversed);
*/
