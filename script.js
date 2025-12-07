document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.getElementById("booking").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let response = document.getElementById("responsemsg");

    // Clear old message
    response.textContent = "";

    // Validation 1: Required fields
    if (name === '' || phone === '' || email === '') {
        response.style.color = "red";
        response.textContent = "Please fill out all fields";
        return;
    }

    // Validation 2: Email
    if (!email.includes("@") || !email.includes(".")) {
        response.style.color = "red";
        response.textContent = "Enter a valid email";
        return;
    }

    // Validation 3: Phone number (Indian format: starts 6–9, 10 digits)
    let phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        response.style.color = "red";
        response.textContent = "Enter a valid phone number";
        return;  // IMPORTANT FIX
    }

    // SUCCESS
    response.style.color = "green";
    response.textContent = "Booking Confirmed! We will contact you shortly.";

    // Alert after success message
    alert("Booking Confirmed! We will contact you shortly.");

    // Reset form
    document.getElementById("booking").reset();
});
document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("design").scrollIntoView({
        behavior: "smooth"
    });
});
