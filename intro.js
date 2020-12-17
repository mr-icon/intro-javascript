// number
// var number1 = 35;
// var number2 = 40;
// alert(number1+number2);

// strings
// only characters to be used in variables = letters, numbers, underscores, dollar signs/ they should begin with a letter they can start with an underscore and a dollar sign, they are also case sensitive
// var test = 'this is a test'
// var Test ='this is not a test'
// alert(test)
// a test to know if they case sensitive

// camel case
// var myFavoriteNumber;

// partial case
// var MyFavoriteNumber;

// underscore
// var my_favorite_number;

// Array
// var color = ['red', 'blue', 'green'];
// alert(colors[0])

// another way of doing array
// var ccolors = new array('red', 'yellow', 'orange');
// alert(colors[2])

// adding values to array
// var ccolors = new array('red', 'yellow', 'orange');
// colors[3] = 'green';

// another way 
// var colors = new array('red', 'yellow', 'orange');
// colors.push('purple');

// arrays of numbers 
// var numbers = [5,6,7,88]; 
// alert(numbers[0] + numbers[2])

// var numbers = [5,6,7,88];
// alert(numbers.length);

// var numbers = [5,6,7,88];
// alert(numbers.sort)

// var numbers = [5,6,7,88];
// alert(numbers.reverse)

//loop
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// var i = 0
// while(i < 10){
//     console.timeLog(i)
//     i++
// }

// var numbers =[2,3,4,5,6,78,9];
// numbers.forEach(function(number){
//     console.log(number);
// });

// var numbers =[2,3,4,5,6,78,9];
// numbers.reverse();
// for(var i = 0;1 < numbers.length;i++){
//     console.log(numbers[i]);
// }

// conditionals
// = means your asigning what is before the equal sign to what is after it
// == means when your compairing both data
// === same thing as double equal sign only that both data will have to match
// if(1 == 1){
//    console.log('this is true')
// }

// var var1 = 3;
// var var2 = 4;
// if(var1 == var2){
//     console.log('this is true');
// // } 

// if you need to test if it's not equal you use this (!)
// var var1 = 3;
// var var2 = 4;
// if(var1 != var2){
//     console.log('this is true');
// // } 

// if its false and you need to do something else if false you use else 
// var var1 = 3;
// var var2 = 4;
// if(var1 == var2){
//     console.log('this is true');
// // } else {
//     console.log('this is false')
// }

// we can also add coniditions to one but it most be true.... for and you use (&&)
// var var1 = 3;
// var var2 = 3;
// if(var1 == var2 && var1 == 3){
//     console.log('this is true');
// // } else {
//     console.log('this is false')
// }

// you can also use or if all complete data will be true, it it can still bring it out as true ... for or you use(||)
// var var1 = 3;
// var var2 = 4;
// if(var1 == var2 || var1 == 3){
//     console.log('this is true');
// // } else {
//     console.log('this is false')
// }

// switch
// var fruit = 'apple'
// switch(fruit){
//     case "banana":
//         alert('i hate bananas');
//         break;
//     case "apple":
//         alert('i love apples');                                                                                 
//          break;
//     case "orange":
//         alert('orange is ok')
//         break;
//     default:
//         alert('all others are ok')
//         break;
// }

// object
// var person = {
//     firstName: 'emmanuel'
//     lastName: 'njoagwuani'
//     age: '18'
// }
// console.log(person.firstName)

// we can also have arrays in it.  
// var person = {
//     firstName: 'emmanuel'
//     lastName: 'njoagwuani'
//     age: '18'
//     childern: ['brianna', 'jennifer', 'jessica']
// }
// console.log(person.childern[0])

// we can also have embeled objects
// var person = {
//     firstName: 'emmanuel'
//     lastName: 'njoagwuani'
//     age: '18'
//     childern: ['brianna', 'jennifer', 'jessica']
//     address: {
//         street: 'sss something st'
//         city: 'asaba'
//         state: 'delta'
//     }
// }
// console.log(person.address.state);

 // we include function
// var person = {
//     firstName: 'emmanuel',
//     lastName: 'njoagwuani',
//     age: '18',
//     childern: ['brianna', 'jennifer', 'jessica'],
//     address: {
//         street: 'sss something st',
//         city: 'asaba',
//         state: 'delta',
//     },
//     fullName: function(){
//         var firstName = 'tobi';
//         return this.firstName +" "+this.lastName;
//     }
// }
// console.log(person.fullName())

// object constructor
// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'round';

// apple.describe = function(){
//     return 'an apple is the color '+this.color+'and th shape '+this.shape;
// }
// console.log(apple.describe());

// a simplier way to do this 
// // constructor pattern
// function Fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
// }

// var apple = new Fruit('apple', 'red', 'round')
// var melon = new Fruit('melon', 'green', 'round')

// console.log(melon)

// constructor pattern
// function Fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;

//     this.describe = function(){
//         return 'A '+this.name+' is the shape '+this.shape;
//     }
// }

// // var apple = new Fruit('apple', 'red', 'round')
// var melon = new Fruit('melon', 'green', 'round')

// console.log(melon.describe())

// var users = [
//     {
//         name: 'john edwin',
//         age: 18
//     },
//     {
//         name: 'mark smith',
//         age: 21
//     },
//     {
//         name: 'shelly williams',
//         age: 35
//     },
// ];
// console.log(users[0])


  