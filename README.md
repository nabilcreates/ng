# RANDOM PHONE NUMBER GENERATOR (NG)

## THESE METHODS RETURN DATA, YOU CAN USE THEM AS VARIABLES

# DECLARE
```JAVASCRIPT
var ng = new NumberGenerator()
```

# .generateNumber(length)
-   returns a RANDOM number matching the length passed as an argument
```javascript
ng.generateNumber(length)

ng.generateNumber(8)
// RETURNS 92830201

ng.generateNumber(2)
// RETURNS 23
```

-   length (int) [default: `0`]
    - The length of the number

# evaluate_number(num_eval, start, stop, req)
-   return a number that matches the specified pattern (Non matching number will return undefined)
```javascript
ng.evaluate_number(num_eval, start, stop, req)

ng.evaluate_number(ng.generateNumber(8) 0, 1, 8)
// RETURNS 'undefined' ON NUMBERS THAT DOESNT MATCH THE PATTERN
// RETURNS THE NUMBER IF IT MATCHES THE PATTERN (e.g: 87332212)
```
-   num_eval (int or str)
    -    A return value from .generateNumber()
-   start (int)
    -   index where you want it to start checking
-   stop (int)
    -   index where you want it to stop checking
-   req (int or string)
    -   requirement to meet

# .writeTo(start, stop, req, writename) [X]
```
DISCLAIMER:
I AM NOT RESPONSIBLE FOR YOUR ACTIONS IF YOU USE THESE NUMBERS GENERATED FROM THIS PROGRAM IRRESPONSIBLY!
```