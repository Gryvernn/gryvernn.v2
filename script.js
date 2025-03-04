// Function to check age for NSFW section
function checkAge() {
    let dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        alert("Please enter your date of birth.");
        return;
    }

    let birthDate = new Date(dobInput);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 18) {
        document.getElementById("nsfw-gallery").classList.remove("hidden");

        // Hide the age check section smoothly
        let ageCheckDiv = document.getElementById("age-check");
        ageCheckDiv.style.transition = "opacity 0.5s ease-out";
        ageCheckDiv.style.opacity = "0";

        setTimeout(() => {
            ageCheckDiv.style.display = "none";
        }, 500);
    } else {
        alert("You must be 18 or older to view this content.");
    }
}

// Zoom Functionality
const images = document.querySelectorAll(".zoomable");
const modal = document.getElementById("zoom-modal");
const modalImg = document.getElementById("zoomed-img");

// Open Zoom on Click
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("show");
        modalImg.src = img.src;
    });
});

// Close Zoom
function closeZoom() {
    modal.classList.remove("show");
}

// Close Modal on Click Outside or ESC Key
modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
        closeZoom();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeZoom();
    }
});
