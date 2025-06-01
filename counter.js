
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    let counter = localStorage.getItem("signatures") || 0;
    const counterEl = document.getElementById("counter");
    if (counterEl) counterEl.textContent = counter;

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            counter++;
            localStorage.setItem("signatures", counter);
            if (counterEl) counterEl.textContent = counter;
            alert("Dziękujemy za podpis! (wersja testowa – dane nie są zapisywane)");
            form.reset();
        });
    }
});
