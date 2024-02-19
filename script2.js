/*
* @name: Assignment 1
* @Course Code: SODV1201
* @class: Software Development Diploma program
* @author: Corazon Marie Palencia
*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", markToGrade);
});

function markToGrade() {
    var markInput = document.getElementById("input").value;
    var resultElement = document.getElementById("result");
    var messageElement = document.getElementById("message");

    resultElement.innerHTML = "";
    messageElement.innerHTML = "";
    messageElement.style.visibility = "hidden";

    try {
        var mark = parseInt(markInput);

        if (isNaN(mark) || mark < 0 || mark > 100) {
            throw "Please enter a number between 0 and 100.";
        }

        var grade;
        if (mark >= 90) {
            grade = "A";
        } 
        else if (mark >= 80) {
            grade = "B";
        } 
        else if (mark >= 70) {
            grade = "C";
        } 
        else if (mark >= 50) {
            grade = "D";
        } 
        else {
            grade = "F";
        }

        resultElement.innerHTML = "Grade: " + grade;
    } catch (error) {
        messageElement.innerHTML = error;
        messageElement.style.visibility = "visible";
    }
}
