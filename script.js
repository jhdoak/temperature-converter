// FUNCTIONS

var getTemp = function(){
  return parseFloat(prompt("What temperature, in fahrenheit, would you like to convert?"));
};

var getChoice = function(){
  return prompt("Press 'C' to convert to celsius and 'K' to convert to kelvin.").toLowerCase();
};

var fahrenheitToCelsius = function(temp) {
  var celsius = Math.round(((temp-32) / 1.8) * 100) / 100;
  alert(temp + " degrees fahrenheit is equal to " + celsius + " degrees celsius.");
};

var fahrenheitToKelvin = function(temp) {
  var kelvin = Math.round(((temp + 459.67) / 1.8) * 100) / 100;
  alert(temp + " degrees fahrenheit is equal to " + kelvin + " degrees kelvin.");
};

var conversionProcess = function(userTemp){
  var marker = 1;
  while (marker === 1) {
    var tempChoice = getChoice();
    if (tempChoice !== 'c' && tempChoice !== 'k'){
      alert("That wasn't a valid option. Try again!");
    } else if (tempChoice === 'c') {
        fahrenheitToCelsius(userTemp);
        marker = 0;
    } else if (tempChoice === 'k') {
        fahrenheitToKelvin(userTemp);
        marker = 0;
    }
  }
};

var exitFunction = function(){
  var userExitChoice = prompt("Type 'E' to exit or 'A' to convert another temperature").toLowerCase();
  if (userExitChoice === 'e') {
    mainIndex = 0;
  }
};

// EXECUTION

var mainIndex = 1;
while (mainIndex === 1){
  var marker = 1;
  var userTemp = getTemp();
  if (isNaN(userTemp) === false){
    conversionProcess(userTemp);
    exitFunction();
  } else {
    alert("I can only convert numbers! Try again!");
  }
}
alert("Thank you for using my conversion tool!");
