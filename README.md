# RANDOM PHONE NUMBER GENERATOR

` ALL OF THE METHODS BELOW WILL RETURN A VALUE, SO YOU CAN USE IT AS A VARIABLE `

Generate phone numbers
```javascript

// DECLARE
var numbergenerator = new NumberGenerator()

// GENERATE PHONE NUMBERS
numbergenerator.generateNumber(options)

// OPTIONS AVAILABLE ARE:
options = {
    length: // THE LENGTH OF THE NUMBER
}
```

Evaluating numbers (Returns numbers that ONLY match the specified pattern)
```javascript
numbergenerator.evaluate_number(start,stop,req)
// start = place where you want it to check for (starting from 0)
// stop = place where you want it to stop checking
// req = requirement

numbergenerator.evaluate_number(0,2,81) // -> IT WILL RETURN NUMBERS THAT MATCHES `81` FROM THE FIRST 2 DIGITS ([81]998382)

numbergenerator.evaluate_number(1,2,81) // -> IT WILL RETURN NUMBERS THAT MATCHES `81` FROM INDEX 1 TILL 2 (9[81]00231)
```