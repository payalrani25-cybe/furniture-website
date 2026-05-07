// console main deta lane ke liye



// const form = document.getElementById("contactForm");

// form.addEventListener("submit", function(event) {
// event.preventDefault(); // 🚫 stops page reload

// // 📥 get values
// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const phone = document.getElementById("phone").value;
// const address = document.getElementById("address").value;
// const message = document.getElementById("message").value;

// // 🧠 check data
// console.log({ name, email, phone, address, message });

// alert("Form captured successfully!");
// });









const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        message: document.getElementById("message").value
    };

    console.log("Sending data:", data);

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert("Message sent successfully!");
        console.log(result);

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
});