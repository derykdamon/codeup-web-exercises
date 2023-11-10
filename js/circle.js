(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(this.radius, 2); // Calculate and return the area
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            var area = this.getArea(); // Calculate the area using the getArea method
            if (doRounding) {
                area = Math.round(area); // Round the area to the nearest integer if doRounding is true
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area); // Log the circle information
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false); // Log circle information without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true); // Log circle information with rounding

    console.log("=======================================================");

    // TODO: Change the radius of the circle to 5.
    circle.radius = 5; // Change the radius of the circle to 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false); // Log circle information without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true); // Log circle information with rounding
})();
