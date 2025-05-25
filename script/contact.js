function sendMessage(event) {
    event.preventDefault(); // Prevents form from actually submitting
    document.getElementById("successMessage").style.display = "block"; // Shows confirmation message
}