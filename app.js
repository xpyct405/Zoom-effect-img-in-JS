let container = document.querySelector('#container');
let img = document.querySelector('img');

// функция при наведении
container.addEventListener('mousemove', (e) => {
    // Узнаём значения x и y. e.target.offsetLeft, e.target.offsetTop это отступ от краёв до начала изображения, чтобы верхнийй левый угол изображения считался как x= 0; y=0
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log(x, y);

    // Чтобы картинка двигалась с курсором
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = `scale(2)`;
})

// функция при убирания курсора с изображения
container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = `center center`;
    img.style.transform = `scale(1)`;
})