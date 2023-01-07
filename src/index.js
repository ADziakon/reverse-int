module.exports = function reverse (n) {
    let str, str2 ="";

    str = String(Math.abs(n));
    
    if (str.length > 1){
      for (i=str.length-1; i>=0; i--){
          str2 = str2 + str[i];
      }
    }else{
        return str;
    }
    return str2;
}
