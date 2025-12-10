// THEME SWITCHER
document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// CHANGE IMAGE BUTTON
document.getElementById("imgBtn").addEventListener("click", function () {
    let img = document.getElementById("mainImg");
    img.src = "https://picsum.photos/200?random=" + Math.floor(Math.random() * 100);
});

// FORM VALIDATION
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let pass = document.getElementById("passInput").value.trim();
    let msg = document.getElementById("formMessage");

    if (name === "" || email === "" || pass === "") {
        msg.textContent = "All fields must be filled.";
        msg.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        msg.textContent = "Enter a valid email.";
        msg.style.color = "red";
        return;
    }

    if (pass.length < 6) {
        msg.textContent = "Password must be at least 6 characters.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
});

// CALCULATOR
document.getElementById("calcBtn").addEventListener("click", function () {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("calcResult").textContent = "Result = " + (a + b);
});
