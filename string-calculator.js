/*
Create a simple String calculator with a method int Add(string numbers)

   1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) 
   for example “” or “1” or “1,2”
    Start with the simplest test case of an empty string and move to 1 and two numbers
    Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
    Remember to refactor

    after each passing test

Allow the Add method to handle an unknown amount of numbers
Allow the Add method to handle new lines between numbers (instead of commas).

    the following input is ok:  “1\n2,3”  (will equal 6)
    the following input is NOT ok:  “1,\n” (not need to prov

    e it - just clarifying)

    Support different delimiters
    to change a delimiter, the beginning of the string will contain a separate line that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
    the first line is optional. all existing scenarios should still be supported

Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message 
*/

function addIntergers(str) {
    var array = [];
    var splittedStr = str.split(",");

    for (var i = 0; i < splittedStr.length; i++) {
        array.push(splittedStr[i]);
        if (splittedStr[i] == "") {
            return 0;

        }
    }
    var finalAnswer = array.reduce(function (a, r) {
        return parseInt(a) + parseInt(r);
    });
    return finalAnswer;

}
console.log(addIntergers("5,7"));
console.log(addIntergers(""));
