var allnumbers = []
/**
 * =========================================
 * MAIN CODE
 * =========================================
 */
class NumberGenerator {

    generateNumber(options) {

        // NUMBER IS EMPTY (SO IT CAN CONCAT LATER)
        let number = '';

        // LOOPS THROUGH THE OPTION (LENGTH) THAT IS GIVEN AS AN ARGUMENT
        for (var i = 0; i < options.length; i++) {

            // CONCAT WITH NUMBER
            number += Math.floor(Math.random() * 10) + ''
        }

        // RETURN THE NUMBER
        return number;
    }

    evaluate_number(start, stop, req) {
        // RUN THE LOOP 100 TIMES
        for (var i = 0; i < 100; i++) {

            // EACH TIME IT RUNS NUM_EVAL IS GOING TO RUN THE FUNCTION BELOW (WHICH WEILL GENERATE DIFFERENT NUMBERS EACH TIME)
            var num_eval = this.generateNumber({
                length: 8
            })

            // CONVERT THE NUMER TO STRING AND SLICE FROM 0 TO 1 SO IT WILL RETURN THE FIRST DIGIT, AND IF ITS EQUAL TO 8
            if (num_eval.toString().slice(start, stop) == req) {

                // RETURN THE NUMBER ITSELF
                return num_eval
            }
        }
        
    }
}