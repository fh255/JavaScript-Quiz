function calculateScore(){
    let totalQuestion= 5;
    let calculateScore=0;
}
// Check answers for question 1
var question1 = document.querySelector('input[name="question1"]:checked');
if (question1)
    document.getElementById("feedback1").innerHTML = question1.value === "West-Indies" ? "Correct!" : "Incorrect. The correct answer is West Indies.";
if (question1.value === "West-Indies") {
    score++;
}
    else {
    document.getElementById("feedback1").innerHTML = "Please select an answer.";
}
function correctAnswer(){

}

function incorrectAnswer(){

}
function incrementAnswer(){

}
function incrementWrongAnswer{

}
