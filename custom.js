// String exemple
string = "Hello Everyone "
    document.write(string +"<br>");

 // Number exemple
 number = 123456789876543;
    document.write(number +"<br>");

 // Boolean exemple
console.log("Boolean Exemple");
var boo = false;
var x = (boo == false);
console.log(x);

// Object exemple
console.log("Object Exemple");
var personne1 = {
    name: "Hamada",
    age: 13,
    height: 1.5,
    weight:35
},
personne2 = {
    name: "Ahmed",
    age: 21,
    height: 1.80,
    weight:70
},
personne3 = {
    name: "Souhaa",
    age: 50,
    height: 1.70,
    weight:65
},
    personne4 = {
    name: "",
    age: 0,
    height:0,
    weight:0
};

console.log(personne1,personne2);

// Getting object properties
console.log("Getting object properties Exemple");
a = personne1.name;
b = personne2.weight;
console.log("name of personne 1:"+ a ,"weight of personne 2:"+b);

// Setting object properties
console.log("Setting object properties Exemple");
 personne4.name = "Mohamed";
 personne4.age = 32;
 personne4.height = 1.60;
 personne4.weight = 90;
 console.log(personne4);

 // Array
console.log("Array Exemple");
x = []; 
y = [1,7,90,132,8,3];
console.log("Vide Array:"+ x ,"Array:"+y);
for (var i = 0; i < y.length; i++) {
    console.log(y);
 }

 // Function exemple
function Affichage(){
    document.write("C'est un exemple de fonction1"+"<br>");
};
Affichage();
var handler = function Affivar(){
    document.write("C'est un exemple de fonction2"+"<br>");
};
handler();

