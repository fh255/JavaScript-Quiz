function calculateScore(){
    let totalQuestion= 5;
    let calculateScore=0;
}
function submitAnswers() {
    var totalQuestions = 2;
    var score = 0;

    // Check answers for question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        document.getElementById("feedback1").innerHTML = q1.value === "paris" ? "Correct!" : "Incorrect. The correct answer is Paris.";
        if (q1.value === "paris") {
            score++;
        }
    } else {
        document.getElementById("feedback1").innerHTML = "Please select an answer.";
    }

    // Check answers for question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        document.getElementById("feedback2").innerHTML = q2.value === "jupiter" ? "Correct!" : "Incorrect. The correct answer is Jupiter.";
        if (q2.value === "jupiter") {
            score++;
        }
    } else {
        document.getElementById("feedback2").innerHTML = "Please select an answer.";
    }

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
        alert("Login successful! (Note: This is a dummy example)");
        // You can add further logic, such as redirecting to another page or making an AJAX request.
    }
}