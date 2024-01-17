console.log('Hello, world!')
const operand = 12;
const operand2 = 45;

let result = operand + operand2;

console.log("resultat de" + operand + "+" + operand2 + "=" + result);
b += a ;
console.log("resultat de a + b = " + b);

let UnePerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musique', 'Jeux videos'],
};

// on peut également déclarer et initialiser un objet de la façon suivante :

let aPerson= new Object();
aPerson.name = 'Jean';
aPerson.age = 35;
aPerson.gender = 'masculin';
aPerson.interest = ['musique', 'badminton'];

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();
