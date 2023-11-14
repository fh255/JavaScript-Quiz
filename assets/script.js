function calculateScore(){
    let totalQuestion= 5;
    let score=0;

    // Check answers for question 1
    var question1 = document.querySelector('input[name="question1"]:checked');
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
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your score is: " + score + " out of " + totalQuestions;
}


// Login Form
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!");
    }
}