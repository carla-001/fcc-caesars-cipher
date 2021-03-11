/* this function shifts the value of uppercase alphabetical value by 13 places forward. 
   non-alphabetic character will be passed on without changes. All tests are uppercase values. */
function rot13(str) {
    // declare result variable
    let result = [];
    //iterate through string, cipher each value and push to result
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        result.push(String.fromCharCode(((((str.charCodeAt(i) - 65 - 13)% 26) + 26) % 26) + 65));
        }
        else {
        result.push(str[i]);
        }
    }
    // return result
    return result.join("");
}