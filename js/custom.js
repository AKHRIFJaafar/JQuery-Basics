//Exemple Simple

$(document).ready(function() {
    $("button").click(function() {
        alert("Hello, Everyone!");
    });
 });

 // Basics
var personne= {
       name: "Hamada",
       age: 13,
       height: 1.50,
},

       personne2= {
        name: "Soukar",
       age: 20,
       height: 1.80,
},

   personne3= {
       name: "Soukar",
       age: 20,
       height: 1.80,
   },
   personne4= {
       name: "",
       age:0 ,
       height: 0,

};
console.log(personne1);

// Getting object properties
console.log("Getting object properties");
a = personne1.name;
console.log(a);





// // Setting object properties
// console.log("Setting object properties")
// personne4.name = "Karim"  
// personne4.age  =  20      
// personne4.height = 1.78  
// console.log(personne4);




//  // Events Exemple
//  $(document).ready(function() {
//     $('h1').bind('click', function(){
//        alert('Hi Bind!');
//     });
//  });

//  // Argument Exemple
//  function Argument(x){
//    console.log(typeof x , arguments.length);
// }
// console.log("Argument Exemple");
// Argument(2,4);

// //callee exemple
// console.log("Callee Exemple");

// function func() {
//    return arguments.callee; 
// }
// x = func();
// console.log(x);

