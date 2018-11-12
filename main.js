var fs = require('fs')

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

    generateNumber(options) {

        if (options) {
            // NUMBER IS EMPTY (SO IT CAN CONCAT LATER)
            let number = '';

            // LOOPS THROUGH THE OPTION (LENGTH) THAT IS GIVEN AS AN ARGUMENT
            for (var i = 0; i < options.length; i++) {

                // CONCAT WITH NUMBER
                number += Math.floor(Math.random() * 10) + ''
            }

            // RETURN THE NUMBER
            return number;
        } else {
            throw new Error('Please enter an option!')
        }

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

    writeTo(start, stop, req, writename) {

        // AN INSTANCE OF EVALUATE_NUMBER IS CREATED WITH SPECIFIC PATTERN
        var num = this.evaluate_number(start, stop, req)

        // CONSOLE LOG (DEBUG)
        // console.log(i)
        // console.log(num !== undefined)

        // NUMBERS THAT DOESNT MEET THE PATTERN WILL RETURN UNDEFINED, IF IT IS NOT UNDEFINED THEN WRITE IT TO THE FILE
        if (num !== undefined) {
            fs.writeFile(`${writename}.txt`, `${num} \n`, {
                flag: 'a'
            }, function () {
                console.log(`DONE`)
            })
        }
    }
}

var ng = new NumberGenerator()