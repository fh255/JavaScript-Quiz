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