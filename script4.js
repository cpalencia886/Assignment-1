/*
* @name: Assignment 1
* @Course Code: SODV1201
* @class: Software Development Diploma program
* @author: Corazon Marie Palencia
*/

$(document).ready(function() {
    $('#convert').click(function() {
        var fahrenheit = parseFloat($('#fahrenheit').val());
        if (!isNaN(fahrenheit)) {
            var celsius = (fahrenheit - 32) * (5 / 9);
            var kelvin = celsius + 273.15;
            $('#result').html("Fahrenheit to Celsius: " + celsius.toFixed(2) + " °C<br><br>" +
                             "Celsius to Kelvin: " + kelvin.toFixed(2) + " K");
        } else {
            $('#result').html("Please enter valid temperature!");
        }
    });
});
