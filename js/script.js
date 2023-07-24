const interior = document.getElementById('interior');
const eksterior = document.getElementById('eksterior');
const safety = document.getElementById('safety');
const int = document.getElementById('int');
const ekst = document.getElementById('ekst');
const safe = document.getElementById('safe');
ekst.style.display = 'none';
safe.style.display = 'none';

interior.addEventListener('click', function () {
    int.classList.add('fadein')
    int.classList.add('active')
    int.style.display = 'flex'
    ekst.style.display = 'none'
    safe.style.display = 'none'
});

eksterior.addEventListener('click', function () {
    ekst.classList.add('fadein')
    ekst.classList.add('active')
    int.style.display = 'none'
    ekst.style.display = 'flex'
    safe.style.display = 'none'
});

safety.addEventListener('click', function () {
    safe.classList.add('fadein')
    safe.classList.add('active')
    int.style.display = 'none'
    ekst.style.display = 'none'
    safe.style.display = 'flex'
});