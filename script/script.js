//Боди--------------------------------------------------------------------------------------------------------------------------------
const body = document.querySelector('body')

body.addEventListener('click', () => {
    //Отрабатываем нажатие вне поля всех выпдающих менюшек и кнопок
    
    //Убираем каталог
    catalog.classList.remove('on')
    svgCatalog.classList.remove('on')
    catalogMenu.classList.add('none')

    //Убираем поиск
    searchInput.classList.add('none')
    searchBtn.classList.remove('current')

    //Убираем логин
    loginBtn.classList.remove('current')
    loginMenu.classList.add('none')
    
    //Убираем корзину
    cartBtn.classList.remove('current')
    cartMenu.classList.add('none')
    
    //Убираем модалку и возвращем скролл странице
    overlay.classList.add('none')
    document.body.style.overflow = "auto";
})

//Поиск--------------------------------------------------------------------------------------------------------------------------------
const searchBtn = document.querySelector('.search')
const searchInput = document.querySelector('.search__menu')

searchBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    searchBtn.classList.toggle('current')
    searchInput.classList.toggle('none')

    //Убираем каталог
    catalog.classList.remove('on')
    catalogMenu.classList.add('none')

    //Убиарем логин
    loginBtn.classList.remove('current')
    loginMenu.classList.add('none')

    //Убираем корзину
    cartBtn.classList.remove('current')
    cartMenu.classList.add('none')
})
searchInput.addEventListener('click', event => event.stopPropagation())

//Каталог--------------------------------------------------------------------------------------------------------------------------------
const catalog = document.querySelector('.catalog')
const svgCatalog = document.querySelector('.svg__catalog')
const catalogMenu = document.querySelector('.catalog__menu')

catalog.addEventListener('click', (event) => {
    event.stopPropagation()
    catalog.classList.toggle('on')
    catalogMenu.classList.toggle('none')
    svgCatalog.classList.toggle('on')

    //Убираем поиск
    searchInput.classList.add('none')
    searchBtn.classList.remove('current')

    //Убираем логин
    loginBtn.classList.remove('current')
    loginMenu.classList.add('none')

    //Убираем корзину
    cartBtn.classList.remove('current')
    cartMenu.classList.add('none')
})
catalogMenu.addEventListener('click', event => event.stopPropagation())

//Логин--------------------------------------------------------------------------------------------------------------------------------
const loginBtn = document.querySelector('.login')
const loginMenu = document.querySelector('.login__menu')

loginBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    loginBtn.classList.toggle('current')
    loginMenu.classList.toggle('none')

    //Убираем поиск
    searchInput.classList.add('none')
    searchBtn.classList.remove('current')

    //Убираем каталог
    catalog.classList.remove('on')
    catalogMenu.classList.add('none')

    //Убираем корзину
    cartBtn.classList.remove('current')
    cartMenu.classList.add('none')
})
loginMenu.addEventListener('click', event => event.stopPropagation())

//Корзина
const cartBtn = document.querySelector('.cart')
const cartMenu = document.querySelector('.cart__menu')

cartBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    cartBtn.classList.toggle('current')
    cartMenu.classList.toggle('none')

    //Убираем каталог
    catalog.classList.remove('on')
    catalogMenu.classList.add('none')

    //Убираем поиск
    searchInput.classList.add('none')
    searchBtn.classList.remove('current')

    //Убираем логин
    loginBtn.classList.remove('current')
    loginMenu.classList.add('none')
})
cartMenu.addEventListener('click', event => event.stopPropagation())

//----------------------------------Модальное окно------------------------------------------------------------------
const feedback__btn = document.querySelector('.feedback__btn')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const close__modal = document.querySelector('.close__modal')
const modal__btn = document.querySelector('.modal__btn')



feedback__btn.addEventListener('click', e => {
    e.stopPropagation()
    overlay.classList.remove('none')
    document.body.style.overflow = "hidden";
})

modal.addEventListener('click', e => {
    e.stopPropagation()
})

close__modal.addEventListener('click', e => {
    overlay.classList.add('none')
    document.body.style.overflow = "auto";
})

modal__btn.addEventListener('click', e => {
    overlay.classList.add('none')
    document.body.style.overflow = "auto";
})