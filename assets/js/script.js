function calculateScore(){
    let totalQuestions= 5;
    let score=0;

    // Check answers for question 1
    let question1 = document.querySelector('input[name="question1"]:checked');
    if (question1) {
        document.getElementById("feedback1").innerHTML = question1.value === "West-Indies" ? "Correct!" : "Incorrect. The correct answer is West Indies.";
        if (question1.value === "West-Indies") {
            score++;
        }
    } else {
        document.getElementById("feedback1").innerHTML = "Please select an answer.";
    }

    // Check answers for question 2
    let question2 = document.querySelector('input[name="question2"]:checked');
    if (question2){
        document.getElementById("feedback2").innerHTML = question2.value === "10" ? "Correct!" : "Incorrect. The correct answer is 10."
    }
    if(question2.value === "10"){
        score++;
    }
    else{
        document.getElementById("feedback2").innerHTML = "Please select an answer.";
    }
    
    // Check answers for question 3
    let question3 = document.querySelector('input[name= "question3"]:checked');
    if (question3) {
        document.getElementById("feedback3").innerHTML = question3.value === "Newzeland" ? "Correct!" : "Incorrect. The correct answer is Newzeland.";
    }
    if (question3.value === "Newzeland") {
        score++;
    }
    else {
        document.getElementById("feedback3").innerHTML = "Please select an answer.";
    }

      // Check answers for question 4
    let question4 = document.querySelector('input[name= "question4"]:checked');
    if (question3) {
        document.getElementById("feedback4").innerHTML = question4.value === "India" ? "Correct!" : "Incorrect. The correct answer is India.";
    }
    if (question4.value === "India") {
        score++;
    }
    else {
        document.getElementById("feedback4").innerHTML = "Please select an answer.";
    }
// Check answers for question 5
    let question5 = document.querySelector('input[name= "question5"]:checked');
    if (question5) {
        document.getElementById("feedback5").innerHTML = question5.value === "Uruguay" ? "Correct!" : "Incorrect. The correct answer is Uruguay.";
    }
    if (question5.value === "Uruguay") {
        score++;
    }
    else {
        document.getElementById("feedback5").innerHTML = "Please select an answer.";
    }

    // Display the result
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your score is: " + score + " out of " + totalQuestions;
}


// Login Form
function validatorForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!");
    }
}