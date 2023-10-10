const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slides = document.querySelectorAll('.slide')
const dot = document.querySelectorAll('.dot')
const body = document.querySelector('body')

let icecream__title = document.querySelector('.icecream__title')
let icecream__subtitle = document.querySelector('.icecream__subtitle')


let currentSlide = 0
const classList = ['active', 'none0', 'none1']
const bodyStyle = ['pink', 'sky', 'yellow']

next.addEventListener('click', () => {
    console.log('next');
    if (currentSlide == 0) {
        right1()
    }
    else if(currentSlide == 1){
        right2()
    }
    else{
        right3()
    }
})

function right1(){
    slides[0].classList.add('none1')
    slides[0].classList.remove('active')

    slides[1].classList.remove('none0')
    slides[1].classList.add('active')

    slides[2].classList.remove('none1')
    slides[2].classList.add('none0')

    body.classList.remove(...bodyStyle)
    body.classList.add('sky')

    //Меняем текст
    icecream__title.innerHTML = 'Сливочное мороженое <br>со вкусом банана'
    icecream__subtitle.innerHTML = 'Сливочное мороженое с ярким банановым <br>вкусом подарит вам свежесть и наслаждение <br>даже в самый жаркий летний день.'

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[1].classList.add('dotActive')

    currentSlide = 1
    console.log(currentSlide);
}
function right2(){
    slides[1].classList.add('none1')
    slides[1].classList.remove('active')

    slides[2].classList.remove('none0')
    slides[2].classList.add('active')

    slides[0].classList.remove('none1')
    slides[0].classList.add('none0')

    body.classList.remove(...bodyStyle)
    body.classList.add('yellow')

    //Меняем текст
    icecream__title.innerHTML = 'Карамельный пломбир <br>с маршмеллоу'
    icecream__subtitle.innerHTML = 'Необычный сладкий десерт с карамельным <br>топпингом и кусочками зефира завоюет <br>сердца сладкоежек всех возрастов.'

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[2].classList.add('dotActive')

    currentSlide = 2
    console.log(currentSlide);
}
function right3(){
    slides[2].classList.add('none1')
    slides[2].classList.remove('active')

    slides[0].classList.remove('none0')
    slides[0].classList.add('active')

    slides[1].classList.remove('none1')
    slides[1].classList.add('none0')

    body.classList.remove(...bodyStyle)
    body.classList.add('pink')

    //Меняем текст
    icecream__title.innerHTML = 'Нежный пломбир <br>с клубничным джемом'
    icecream__subtitle.innerHTML = 'Натуральное мороженое из свежих сливок <br>и молока с вкуснейшим клубничным джемом – <br>это идеальный десерт для всей семьи.'

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[0].classList.add('dotActive')

    currentSlide = 0
    console.log(currentSlide);
}

prev.addEventListener('click', () => {
    console.log('prev');
    if (currentSlide == 0) {
        left1()
    }
    else if(currentSlide == 2){
        left2()
    }
    else{
        left3()
    }
})

function left1(){
    slides[0].classList.remove('active')
    slides[0].classList.add('none0')

    slides[1].classList.remove('none0')
    slides[1].classList.add('none1')

    slides[2].classList.remove('none1')
    slides[2].classList.add('active')

    body.classList.remove(...bodyStyle)
    body.classList.add('yellow')

    //Меняем текст
    icecream__title.innerHTML = 'Карамельный пломбир <br>с маршмеллоу'
    icecream__subtitle.innerHTML = 'Необычный сладкий десерт с карамельным <br>топпингом и кусочками зефира завоюет <br>сердца сладкоежек всех возрастов.'

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[2].classList.add('dotActive')

    currentSlide = 2
    console.log(currentSlide + ' left1');
}
function left2(){
    slides[2].classList.remove('active')
    slides[2].classList.add('none0')

    slides[0].classList.remove('none0')
    slides[0].classList.add('none1')

    slides[1].classList.remove('none1')
    slides[1].classList.add('active')

    body.classList.remove(...bodyStyle)
    body.classList.add('sky')

    //Меняем текст
    icecream__title.innerHTML = 'Сливочное мороженое <br>со вкусом банана'
    icecream__subtitle.innerHTML = 'Сливочное мороженое с ярким банановым <br>вкусом подарит вам свежесть и наслаждение <br>даже в самый жаркий летний день.'

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[1].classList.add('dotActive')

    currentSlide = 1
    console.log(currentSlide + ' left2');
}
function left3(){
    slides[1].classList.remove('active')
    slides[1].classList.add('none0')

    slides[2].classList.remove('none0')
    slides[2].classList.add('none1')

    slides[0].classList.remove('none1')
    slides[0].classList.add('active')

    body.classList.remove(...bodyStyle)
    body.classList.add('pink')

    //Меняем текст
    icecream__title.innerHTML = 'Нежный пломбир <br>с клубничным джемом'
    icecream__subtitle.innerHTML = 'Натуральное мороженое из свежих сливок <br>и молока с вкуснейшим клубничным джемом – <br>это идеальный десерт для всей семьи.'

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[0].classList.add('dotActive')

    currentSlide = 0
    console.log(currentSlide + ' left3');
}

function update(index){
    slides[0].classList.remove(...classList)
    slides[1].classList.remove(...classList)
    slides[2].classList.remove(...classList)

    dot.forEach((el) => {
        el.classList.remove('dotActive')
    })
    dot[index].classList.add('dotActive')

    if (index == 0) {
        right3()
    }
    else if(index == 1){
        right1()
    }
    else{
        right2()
    }
}

dot.forEach((el, index) => {
    el.addEventListener('click', () => {
        el.classList.add('dotActive')
        update(index)
    })
})