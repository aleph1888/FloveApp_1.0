function inicia() {

  var primeraFrase = "Hola, humano, soy un bot con memoria. Dime algo..."; 
	// 'primeraFrase' es una variable local creada por la función 'inicia'

  var loQueCuentaElHumano = [];

  function saludarAlHumano() { // 'saludarAlHumano' es una función interna (un closure)

    	// dentro de esta función usamos una variable declarada en la función padre
    console.log(primeraFrase);
	
    alert(primeraFrase); 

    console.log("Ya he aprendido: " + loQueCuentaElHumano.length + " cosas."); 

	// dentro de esta función mostramos un diálogo para recibir un valor
    var humanSays = prompt("Venga... vamos, dime algo:", "bot rome");

    loQueCuentaElHumano.push({time: Date.now(), payload: humanSays});

    console.dir(loQueCuentaElHumano);
   
    setTimeout(saludarAlHumano, 2000); 
  }

  saludarAlHumano();
}
