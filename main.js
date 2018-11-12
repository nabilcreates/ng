var allnumbers = []
/**
 * =========================================
 * MAIN CODE
 * =========================================
 */
class NumberGenerator {

    generateNumber(options) {

        let number = '';

        for (var i = 0; i < options.length; i++) {
            number += Math.floor(Math.random() * 10) + ''
        }

        return number;
    }

}

/*
==============================================
THE CODE BELOW IS AN EXAMPLE TO BE USED IN AN
EXTERNAL JS FILE
==============================================
*/

// NEW INSTANCE OF CLASS
var numbergenerator = new NumberGenerator()

// RUN THE LOOP 100 TIMES
for (var i = 0; i < 10000; i++) {

    // EACH TIME IT RUNS NUM_EVAL IS GOING TO RUN THE FUNCTION BELOW (WHICH WEILL GENERATE DIFFERENT NUMBERS EACH TIME)
    var num_eval = numbergenerator.generateNumber({
        length: 8
    })

    console.log(num_eval)
    
    // CONVERT THE NUMER TO STRING AND SLICE FROM 0 TO 1 SO IT WILL RETURN THE FIRST DIGIT, AND IF ITS EQUAL TO 8
    if (num_eval.toString().slice(0, 1) == 9) {

        // PUSH IT TO THE ARRAY
        allnumbers.push(num_eval)
    }
}

// CONSOLE.LOG THE ARRAY
console.log(allnumbers)