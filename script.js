function converterTemperaturas() { 
	var inCelsius = document.getElementById("inputCelsius");
	var inFahrenheit = document.getElementById("inputFahrenheit");
	var inKelvin = document.getElementById("inputKelvin");
	var inRankine = document.getElementById("inputRankine");

	var celsius = Number(inputCelsius.value);
	var fahrenheit = Number(inputFahrenheit.value);
	var kelvin = Number(inputKelvin.value);
	var rankine = Number(inputRankine.value);

	
	if(celsius != "" && fahrenheit == "" && kelvin == "" && rankine == ""){
		fahrenheit = ((celsius / 5) * 9) + 32;
		inFahrenheit.value = fahrenheit;
		kelvin = celsius + 273.15;
		inKelvin.value = kelvin;
		rankine = celsius * 1.8 + 491.67;
		inRankine.value = rankine;
	}
	
	if(celsius == "" && fahrenheit != "" && kelvin == ""){
		celsius = ((fahrenheit - 32) / 9) * 5;
		inCelsius.value = celsius;
		kelvin = celsius + 273.15;
		inKelvin.value = kelvin;
		rankine = celsius * 1.8 + 491.67;
		inRankine.value = rankine;
	}
	
	if(celsius == "" && fahrenheit == "" && kelvin != "" && rankine == "") {
		celsius = kelvin - 273.15;
		inCelsius.value = celsius;
		fahrenheit = ((celsius / 5) * 9) + 32;
		inFahrenheit.value = fahrenheit;
		rankine = celsius * 1.8 + 491.67;
		inRankine.value = rankine;
	}

	if(celsius == "" && fahrenheit == "" && kelvin == "" && rankine != "") {
		celsius = (rankine - 491.67) / 1.8;
		inCelsius.value = celsius;
		fahrenheit = ((celsius / 5) * 9) + 32;
		inFahrenheit.value = fahrenheit;
		kelvin = celsius + 273.15;
		inKelvin.value = kelvin;
	}
	
	inCelsius.focus();
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click",converterTemperaturas); 

function limpar(){
	inputCelsius.value = "";
	inputFahrenheit.value = "";
	inputKelvin.value = "";
	inputRankine.value = "";
	inputCelsius.focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click",limpar); 