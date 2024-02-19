/*
* @name: Assignment 1
* @Course Code: SODV1201
* @class: Software Development Diploma program
* @author: Corazon Marie Palencia
*/

document.addEventListener("DOMContentLoaded", function() {
    var photoName = document.getElementById('photo_name');

    // Hide pic name in first 10 seconds
    photoName.textContent = '';

    function nameAppear() {
        photoName.textContent = 'profile.jpg';
    }
    setTimeout(nameAppear, 10000);
});