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
        let nsfwGallery = document.getElementById("nsfw-gallery");
        if (nsfwGallery) {
            nsfwGallery.classList.remove("hidden");
        }

        let ageCheckDiv = document.getElementById("age-check");
        if (ageCheckDiv) {
            ageCheckDiv.style.transition = "opacity 0.5s ease-out";
            ageCheckDiv.style.opacity = "0";

            setTimeout(() => {
                ageCheckDiv.style.display = "none";
            }, 500);
        }
    } else {
        alert("You must be 18 or older to view this content.");
    }
}

function hideNSFW() {
    let nsfwGallery = document.getElementById("nsfw-gallery");
    if (nsfwGallery) {
        nsfwGallery.classList.add("hidden");
    }
}

// Zoom Functionality
const images = document.querySelectorAll(".zoomable");
const modal = document.getElementById("zoom-modal");
const modalImg = document.getElementById("zoomed-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        if (modal && modalImg) {
            modal.classList.add("show");
            modalImg.src = img.src;
        }
    });
});

function closeZoom() {
    if (modal) {
        modal.classList.remove("show");
    }
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
            closeZoom();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeZoom();
    }
});
