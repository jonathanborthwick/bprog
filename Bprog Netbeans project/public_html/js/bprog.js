var bprog = bprog || {}
bprog.angulartests = bprog.angulartests || {}
bprog.angulartests.data = function () {
    var context = {};
    context.people = [{name: 'Jono', city: 'langley'}, {name: 'Andrew', city: 'bearsden'}];
    context.bprogModule = angular.module('bprogModule', []);
    context.bprogModule.controller('CustomersController', function () {
        //this.sortBy = 'name';
        //this.reverse = false;
        this.customers = [
            {
                joined: '2015-08-26', name: 'me', city: 'Langley'
            },
            {
                joined: '2015-08-25', name: 'you', city: 'Bearsden'
            }
        ];
        this.doSort = function (propName) {
            console.log("sort?");
            this.sortBy = propName;
            this.reverse = !this.reverse;
        }
    });
    return context;
}();//self call








