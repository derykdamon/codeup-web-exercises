(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Der", "Mal", "Mel", "Dav"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Number of elements in the 'names' array: " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("First name: " + names[0]);
    console.log("Second name: " + names[1]);
    console.log("Third name: " + names[2]);
    console.log("Fourth name: " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log("Name at index " + i + ": " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name, index) {
        console.log("Name at index " + index + ": " + name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arr) {
        if (arr.length > 0) {
            return arr[0];
        } else {
            return undefined;
        }
    }

    function second(arr) {
        if (arr.length > 1) {
            return arr[1];
        } else {
            return undefined;
        }
    }

    function last(arr) {
        if (arr.length > 0) {
            return arr[arr.length - 1];
        } else {
            return undefined;
        }
    }

    console.log("First item in the array: " + first(names));
    console.log("Second item in the array: " + second(names));
    console.log("Last item in the array: " + last(names));

})();

