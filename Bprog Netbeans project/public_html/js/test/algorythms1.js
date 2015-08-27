function rev(soFar, count){
    console.log("asString: " + soFar );
    console.log("count: " + count);
    var len = soFar.length;
    var ret = soFar;
    if(len > count){
        var subd = soFar.substring(1,len);
        var first = soFar[0];
        //we want to inject the first letter at the index position one back from the length, minus what the count is at this point
        var indexOfInsert = len-1 - count;
        var asArray = subd.split("");
        asArray.splice(indexOfInsert,0,first);
        count++;
        var asString = "";
        //recreate as string, not array - the default toString() makes this a comma delimited string. It is best toi just recreate it in a loop
        for(var i = 0; i<len; i++){
            asString+=asArray[i];
        }
        ret = rev(asString,count);
    }
    //only get here when count is greater than the length of the original string
    return ret;//will always be a refference to soFar, which is being reasigned in the recursive loop
}

var reversed = rev("Hello",0);
console.log("result",reversed);