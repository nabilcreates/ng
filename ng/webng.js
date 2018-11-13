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