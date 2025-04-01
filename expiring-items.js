// expiring-items.js
const fridgeItems = [
    { name: "Chicken", daysLeft: 2 },
    { name: "Tomato", daysLeft: 5 },
    { name: "Spinach", daysLeft: 1 },
];

function listExpiringItems() {
    const container = document.getElementById("recipe-suggestions");
    if (!container) return;

    const expiring = fridgeItems.filter(item => item.daysLeft <= 3);
    if (expiring.length === 0) {
        container.innerHTML = "All your ingredients are fresh!";
        return;
    }

    container.innerHTML = "<strong>Expiring Soon:</strong><ul>" +
        expiring.map(item => `<li>${item.name} - ${item.daysLeft} day(s) left</li>`).join("") +
        "</ul>";
}
