var readlineSync = require('readline-sync');
var aiml = require('aiml-high');

var interpreter = new aiml();
interpreter.loadFiles(['./joke.aiml']);

console.log(
  `Hola, humano. Quieres decir algo? 
  Soy un bot aiml. Entiendo patrones...`);

// Console client. 
var text = ' ';

var listenToTheHuman = function (){

	while (text.length > 0 && text != '.') {

  		text = readlineSync.question('> ');

  //console.log("Has dicho: " + text);

  // Respond to input. 
  		interpreter.findAnswer(text, function(answer, arr, input) {
  
    //console.log("Y yo te digo...");
    			if ( answer ) console.log(answer);
    			else console.log("... estoy pensando... un momento...");

			text = ' ';		
			listenToTheHuman();

  		});
	}

}

listenToTheHuman();
