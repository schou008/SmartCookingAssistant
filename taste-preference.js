// taste-preference.js
window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("favCuisine");
    const output = document.getElementById("personalize-output");

    if (input && output) {
        const savedCuisine = localStorage.getItem("favCuisine");
        if (savedCuisine) {
            output.textContent = `Welcome back! We know you enjoy ${savedCuisine} dishes.`;
        }

        const saveBtn = document.getElementById("saveCuisine");
        if (saveBtn) {
            saveBtn.addEventListener("click", () => {
                const cuisine = input.value.trim();
                if (cuisine) {
                    localStorage.setItem("favCuisine", cuisine);
                    output.textContent = `Saved: You love ${cuisine} food!`;
                }
            });
        }
    }
});
