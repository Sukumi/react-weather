
(() => {
    console.log([1, 2, 3].map(n => +1));

    var names = ['Pete', 'Gerald', 'Hanna'];

    names.forEach(function (name) {
        console.log('foreach:' + name);
    });


    names.forEach(name => console.log('foreach: ' + name));

// this keyword behavior: classic
// when we create anonymous function we update the 'this' binding to the current function context
// so: this.name is no longer referencing the old this context with the .name property
// Solution: arrow function
// Arrow function do not update the this keyword context
    var person = {
        name: 'Pete',
        greet: function () {
            //anonymous function get an updated this context; outer context with this (i.e. this.name) no longer available
            //Solution: .bind(this)
            names.forEach(function (name) {
                console.log('Old school: ', this.name + ' says Hi to ' + name);
            }.bind(this));
        },
        greetArrow: function () {
            names.forEach((name) => {
                console.log('Arrow Func.: ',this.name + ' says Hi to ' + name);
            }
            );
        }
    };

    person.greet();
    person.greetArrow();


    function add(a, b) {
        return a + b;
    }

    var addStatement = (a, b) => {
        return a + b;
    };

    var addExpression = (a, b) => a + b;


    console.log('add:' + add(9, 1));
    console.log('addStatement:' + addStatement(9, 2));
    console.log('addExpression:' + addExpression(9, 3));

    var test = 2;
    console.log(this.test);
    function myFunc2() {
        console.log(test);
    }

    let myFunc = () => {
        console.log(this.test);
    }

    myFunc2();
    myFunc();

})();