var allnumbers = []

class NumberGenerator {

    generateNumber(options) {

        let number = '';

        for (var i = 0; i < options.length; i++) {
            number += Math.floor(Math.random() * 9) + ''
        }

        return number;
    }

}

var numbergenerator = new NumberGenerator()

for (var i = 0; i < 100; i++) {

    var num_eval = numbergenerator.generateNumber({
        length: 8
    })
    
    // IS 8
    if (num_eval.toString().slice(0, 1) == 8) {
        allnumbers.push(num_eval)
    }
}


console.log(allnumbers)