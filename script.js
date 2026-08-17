const form = document.getElementById("service-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: new URLSearchParams(formData),
        mode: "no-cors"
    })
    .then(() => {
        form.reset();

        alert("Thank you! Your request has been received. We'll contact you shortly.");
    })
    .catch((error) => {
        console.error(error);
        alert("Unable to submit your request. Please try again.");
    });
});