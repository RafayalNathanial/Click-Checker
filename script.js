const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click', () => {
    alert("💕❤️I Love You Sweet Heart😍 Babu ❤️💕");
})
function movetarget() {
    const maxWidth = 100;
    const maxHeight = 500;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';

}

target.addEventListener('mouseenter', function () {
    movetarget();
})
