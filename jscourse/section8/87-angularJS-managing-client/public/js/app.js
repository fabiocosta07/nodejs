angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message ="hello";

    this.people = [
        {
            name: "John Doe"
        },
        {
            name: "Jane Doe"
        },
    ];
}