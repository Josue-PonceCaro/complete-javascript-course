'use strict';
const age = 10; 
console.log('hello world');

const Jonas = {
    firstName : 'Jonas',
    lastName : 'Samir',
    birthYear : 2000,
    friends : ['Juan', 'Lucho', 'Pepe'],
    driverLicence : true,
    // calcAge : function(birthYear){
    //     return 2040 - birthYear
    // }
    // calcAge : function(){
    //     console.log(this)
    //     return 2040 - this.birthYear
    // }
    // calcAge : function(){
    //     this.age = 2040 - this.birthYear;
    //     return this.age;
    // }
    calcAge : function(){
        return this.age ? this.age : this.age = 2040 - this.birthYear;  
    },
    getSummary : function() {
        return `${this.firstName} is ${this.age} and hi has ${this.driverLicence ? 'a' : 'No'} driver licence`;
    },
}
console.log(Jonas.firstName + ' has ' + Jonas.friends.length + ' friends and his best friend is ' + Jonas.friends[0]);
console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends and his best friend is ${Jonas.friends[0]}`);
// console.log(Jonas['calcAge']());
console.log(Jonas.calcAge());
console.log(Jonas.age);
console.log(Jonas.age);
console.log(Jonas.age);
console.log(Jonas.getSummary())