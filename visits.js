window.onload = function() {
    let visits = localStorage.getItem('odwiedziny') || 0;
    visits++;
    localStorage.setItem('odwiedziny', visits);
    document.getElementById('licznikOdwiedzin').innerText = visits;
};
