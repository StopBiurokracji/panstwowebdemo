
document.addEventListener("DOMContentLoaded", function () {
    let count = localStorage.getItem("visits") || 0;
    count++;
    localStorage.setItem("visits", count);
    const el = document.getElementById("visits");
    if (el) el.textContent = count;
});
