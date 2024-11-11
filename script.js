function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("feedback");

    if (name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill out all fields.";
        feedback.style.color = "red";
        return false;
    } else {
        feedback.textContent = "Thank you for contacting us!";
        feedback.style.color = "#28a745";
        return true;
    }
}
