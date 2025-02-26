window.addEventListener("DOMContentLoaded", () => {
    const warningPopup = document.getElementById("warning-popup");
    if (warningPopup) {
        const enterBtn = document.getElementById("enter-button");
        const exitBtn = document.getElementById("exit-button");
        enterBtn.addEventListener("click", () => {
            warningPopup.classList.add("hidden");
        });
        exitBtn.addEventListener("click", () => {
            window.location.href = "https://google.com";
        });
    }
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            tabContents.forEach(content => {
                content.classList.remove("active");
            });
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
