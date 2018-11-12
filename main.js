let mobilenumber = {
    length: 8,
    possible: [],
}


let finalnumber = []

function generateNumber(length) {

    let number = '';

    for (var i = 0; i < length; i++) {
        number += Math.floor(Math.random() * 9) + ''
    }
    return number;
}

function evaluateNumber() {
    // let stupidnum = 900
    let thenumber = generateNumber(8)


    if (thenumber.toString().slice(0, 1) !== '8') {
        setTimeout(() => {
            evaluateNumber()
        }, 1)
    }else{
        console.log(`DONE! ${thenumber}`)
    }


}

evaluateNumber()