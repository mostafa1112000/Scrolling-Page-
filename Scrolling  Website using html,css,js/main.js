let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let novil = document.querySelector('.novil');

window.onscroll = function() {
    let value = scrollY;
    console.log(value);
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value + 'px';
    novil.style.fontSize = value + 'px';
    if (scrollY >= 50) {
        novil.style.fontSize = 50 + 'px';
        novil.style.position = 'fixed';
        if (scrollY >= 486) {
            novil.style.display = 'none';
        } else {
            novil.style.display = 'block';

        }
        if (scrollY >= 144) {
            document.querySelector('.main').style.background = '#3c7690';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';

        }


    }











}