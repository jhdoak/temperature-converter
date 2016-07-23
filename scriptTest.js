// FUNCTIONS

var convert = function(){
  var userTemp = parseFloat(document.getElementById('user-input').value);

  if (isNaN(userTemp) === false){
    document.getElementById('celsius-conversion').innerHTML = fahrenheitToCelsius(userTemp);
    document.getElementById('kelvin-conversion').innerHTML = fahrenheitToKelvin(userTemp);
  } else {
    alert("I can only convert numbers! Try again!");
  }
};

var fahrenheitToCelsius = function(temp) {
  return Math.round(((temp-32) / 1.8) * 100) / 100;
};

var fahrenheitToKelvin = function(temp) {
  return Math.round(((temp + 459.67) / 1.8) * 100) / 100;
};

// EXECUTION

document.getElementById("convert-button").addEventListener("click", convert);
