//the following prompts the user to enter a string to reverse, which is then stored in the variable
var input = prompt("Enter a string that you want to reverse");

//the following is a function meanth to reverse a given string
function reverse(toReverse){
    var reversedString = "";
    for (i= toReverse.length - 1; i >= 0; i--){
        reversedString += toReverse[i];
    }
    alert(reversedString);
}

reverse(input);

