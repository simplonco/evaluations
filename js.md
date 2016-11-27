NOM :

| expression / programme | valeur de retour / dans la console |
| -----------|----------------- |
| `typeof 5;` | |
| `6/”trois”;` | |
| `“hello” + “you“;` | |
| `“length”.length;` | |
| `6 < 6;` | |
| `“chat” === “chat”;` | |
| `[“chat”] === [“chat”]` | |
| `!false;` | |
|
```js
var result = 0;
for (var i = 0; i < 5; i++) result += i;
console.log(result);
```
| |

```js
var b = [1, 2];
b[0] = "master p";
console.log(b);
```

var words = ["mutant", "ninja", "turtles"];
var great_show = "";
for (var i = 0; i < words.length; i++) {
  great_show += words[i] + " ";
}
console.log(great_show);

function lamp() {
  var my_special_variable = "I am special";
}
lamp();
console.log(my_special_variable);

var label = “firstname”;
var me = { firstname: “Rudy”, label: “Dr.” };
console.log(me[“label”]);
console.log(me[label]);

function sum(a, b) { return a + b; }
console.log(sum(1, 2, 3, 4));

function a(x, y, z) { return z; }
console.log(a("blah"));

var me = {
  first: "Matthew",
  last: "Powers",
  full_name: function () {
    return this.first + " " + this.last;
  }
}
console.log(me.full_name());

var game1 = { title: "tic tac toe" };
var game2 = { title: "tic tac toe" };
console.log(game1 === game2 );
console.log(game1.title === game2.title );

<!--
but  comment faire en JS ?
arrondir​
 4.88  ​
à l’entier le plus proche
tester si le tableau ​
arr ​
 est non vide
tester si ​
unknown ​
 est un tableau
accéder au 2ème élément du tableau ​
arr
x = { prop: “val”, “propbis”:
“valbis” };

// comment accéder à la propriété ​
prop

Questions en vrac
Qu’est­ce qui est considéré “faux” en JavaScript ?

Quelles sont les clefs de l’objet ​
{ x: y, z: {}, foo: “bar” } ​
 ?

Ecrire deux boucles différentes pour itérer sur la tableau var arr = [1, 3, 5, 7];
