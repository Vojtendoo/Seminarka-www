document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const loginPopup = document.getElementById("loginPopup");
    const closePopup = document.getElementById("closePopup");

    // Zobrazit popup
    loginButton.addEventListener("click", () => {
        loginPopup.classList.remove("hidden");
        loginPopup.classList.add("visible");
    });

    // Zavřít popup
    closePopup.addEventListener("click", () => {
        loginPopup.classList.remove("visible");
        loginPopup.classList.add("hidden");
    });

    // Zavření popup při kliknutí mimo obsah
    loginPopup.addEventListener("click", (event) => {
        if (event.target === loginPopup) {
            loginPopup.classList.remove("visible");
            loginPopup.classList.add("hidden");
        }
    });
});




