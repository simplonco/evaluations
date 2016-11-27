> typeof 5;
'number'
> 6/"trois";
NaN
> "hello" + "you";
'helloyou'
> "length".length;
6
> 6 < 6;
false
> "chat" === "chat";
true
> ["chat"] === ["chat"];
false
> !false;
true


var result = 0;
for (var i = 0; i < 5; i++) result += i;
console.log(result);
​
=> 10
​
var b = [1, 2];
b[0] = "master p";
console.log(b);
​
=> ["master p", 2]
​
var words = ["mutant", "ninja", "turtles"];
var great_show = "";
for (var i = 0; i < words.length; i++) {
  great_show += words[i] + " ";
}
console.log(great_show);
​
=> "mutant ninja turtles "
​
function lamp() {
  var my_special_variable = "I am special";
}
lamp();
console.log(my_special_variable);
​
=> Uncaught ReferenceError: my_special_variable is not defined(…)(anonymous function)
​
var label = "firstname";
var me = { firstname: "Rudy", label: "Dr." };
console.log(me["label"]);
console.log(me[label]);
​
=> "Dr."
=> "Rudy"
​
function sum(a, b) { return a + b; }
console.log(sum(1, 2, 3, 4));
​
=> 3
​
function a(x, y, z) { return z; }
console.log(a("blah"));
​
=> undefined
​
var me = {
  first: "Matthew",
  last: "Powers",
  full_name: function () {
    return this.first + " " + this.last;
  }
}
console.log(me.full_name());
​
=> "Matthew Powers"
​
var game1 = { title: "tic tac toe" };
var game2 = { title: "tic tac toe" };
console.log(game1 === game2 );
console.log(game1.title === game2.title );
​
=> false
=> true


// arrondir 4.88  à l’entier le plus proche
Math.ceil(4.88)
​
// tester si le tableau arr est non vide
typeof arr != "undefined"
&& arr != null
&& arr.length != null
&& arr.length > 0
​
// tester si unknown est un tableau
// http://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript
unknow.constructor === Array
​
// accéder au 2ème élément du tableau arr
x[1]
​
// x = { prop: "val", "propbis": "valbis" };
// comment accéder à la propriété prop
x.prop
x["prop"]


// Qu’est ce qui est considéré “faux” en JavaScript ?
0, 0.0, "", false, null, undefined, NaN
​
// Quelles sont les clefs de l’objet { x: y, z: {}, foo: “bar” } ?
x, z, foo
​
// Ecrire deux boucles différentes pour itérer sur la tableau var arr = [1, 3, 5, 7];
for (var i = 0; i < arr.lenght; ++i) {
    arr[i];
}
​
var i = 0;
while (i < arr.lenght;) {
    arr[i++];
}
