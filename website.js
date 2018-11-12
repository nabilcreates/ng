// NEW INSTANCE
var ng = new NumberGenerator()

// VUE APP
var app = new Vue({

    el: ".app",

    data() {
        return {

            // ALL PHONE NUMBERS WILL BE STORED IN AN ARRAY
            phonenumbers: []
        }
    },

    mounted() {

        // ONCE IT IS MOUNTED, PUSH A PHONE NUMBER TO THE ARRAY
        // THAT PHONE NUMBER 'PATTERN' IS (0,2,84)
        for (var i = 0; i < 100; i++) {
            this.phonenumbers.push(ng.evaluate_number(0, 2, 84))
        }
    }

})