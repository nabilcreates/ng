var fs = require('fs');

/**
 * =========================================
 * =========================================
 * MAIN CODE
 * MAIN CODE
 * MAIN CODE
 * MAIN CODE
 * =========================================
 * =========================================
 */
class NumberGenerator {

    generateNumber(length = 8) {

        // NUMBER IS EMPTY (SO IT CAN CONCAT LATER)
        let number = '';

        // LOOPS THROUGH THE OPTION (LENGTH) THAT IS GIVEN AS AN ARGUMENT
        for (var i = 0; i < length; i++) {

            // CONCAT WITH NUMBER
            number += Math.floor(Math.random() * 10) + '';
        }

        // RETURN THE NUMBER
        return number;

    }

    evaluate_number(num_eval, start, stop, req) {
        // CONVERT THE NUMER TO STRING AND SLICE FROM 0 TO 1 SO IT WILL RETURN THE FIRST DIGIT, AND IF ITS EQUAL TO 8
        if (num_eval.toString().slice(start, stop) == req) {

            // RETURN THE NUMBER ITSELF
            return num_eval;

        }

    }

}

var ng = new NumberGenerator();
// console.log(ng.generateNumber())

// for (var i = 0; i < 100; i++) {
//     console.log(ng.evaluate_number(ng.generateNumber(8), 0, 1, 8))
// }


// ADDED DEFAULT VALUE FOR NG.GENERATENUMBER()
// REFACTORED CODE IN EVALUATE_NUMBER
// EVALUATE NUMBER TAKES A VALUE (NG.GENERATENUMBER()) AS FIRST ARG
// WRITE TO TAKEN A RETURN VALUE AS FIRST ARGUMENT
// REMOVED WRITETO FUNCTION