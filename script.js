//-----1

function squareDigits(num){
    var res = "";
    num = num.toString();
    for (var i = 0; i < num.length; i++)
    {
        res = res + (num[i] * num[i]).toString();
    }
    return Number(res);
}
//---2

function duplicateEncode(str){
//create a var to hold string value that IGNORES case
    var word = str.toLowerCase();
//create a var to hold the finished string to return after it's looped through
    var unique = '';
//loop through all letters in string
    for (var i = 0; i < word.length; i++) {
//check for any characters that repeat
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//for each character that never dupes, place (
            unique += '(';
        } else
//for each character that IS a dupe, place )
            unique += ')';
    }
//return the full string value where '(' are non duped and all')' are duped
    return unique;

}
//test by printing this in the console
console.log(duplicateEncode('BaRaban'));

//---3
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
