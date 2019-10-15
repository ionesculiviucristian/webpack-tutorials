// ES6 and Typescript Tutorial - 11 - lexical 'this'
export {}

var employee = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () {
            //console.log(this.id); // context is bound to the current function
            console.log(self.id);
        }, 1000)
    },
    arrowGreat: function () {
        setTimeout(() => console.log(this.id), 1000)
    }
};

employee.greet();
employee.arrowGreat();
