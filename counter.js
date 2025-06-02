// Prosty licznik symulowany – lokalnie w LocalStorage
function updateCounter(id, storageKey, base) {
    let value = parseInt(localStorage.getItem(storageKey) || base);
    value += Math.floor(Math.random() * 5); // losowe zwiększenie
    document.getElementById(id).textContent = value;
    localStorage.setItem(storageKey, value);
}

document.addEventListener("DOMContentLoaded", () => {
    updateCounter("visitCounter", "visits", 5678);
    updateCounter("signatureCounter", "signatures", 1234);
});