function dodajPodpis() {
    let count = localStorage.getItem('podpisy') || 0;
    count++;
    localStorage.setItem('podpisy', count);
    document.getElementById('licznikPodpisow').innerText = count;
    alert('Dziękujemy za podpis!');
}
window.onload = function() {
    document.getElementById('licznikPodpisow').innerText = localStorage.getItem('podpisy') || 0;
};
