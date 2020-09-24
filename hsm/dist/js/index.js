// lazysizes
document.addEventListener('lazyloaded', function(e) {
    var el = e.target;

    if (!el.dataset.bg) {
        el.parentNode.parentNode.classList.add('is-loaded');
    }
});

document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        if (bg == "css") {
            e.target.classList.add("is-load");
        } else {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    }
});

const body = document.getElementsByTagName('BODY')[0],
      header = body.querySelector('.header');


if (header){
  const burger = header.querySelector('.header__burger-btn'),
        navigation = document.querySelector('.navigation'),
        navlist1 = document.querySelector('.navigation__list');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('aside_visible');
    navlist1.classList.toggle('active')
  }) 
 

  const searchbtn = document.querySelector('.search-btn'),
        searchcontainer = document.querySelector('.search__container'),
        closebtn = document.querySelector('.closebtn');

  searchbtn.addEventListener('click', () => {
    searchcontainer.classList.toggle('search_active');
  }) 
  closebtn.addEventListener('click', () => {
    searchcontainer.classList.toggle('search_active');
  }) 

  const btnopen = document.querySelector('.banner__info-span1'),
        bannerlist = document.querySelector('.banner__info-list'),
        burgerclose = document.querySelector('.navigation__close--btn');

  btnopen.addEventListener('click', () => {
    btnopen.classList.toggle('after-none');
    bannerlist.classList.toggle('open');
  }) 

  burgerclose.addEventListener('click', () => {
    navigation.classList.remove('aside_visible');
    burger.classList.toggle('burger_active');
  }) 
  
  const elements = document.querySelectorAll('.footer__btn-nav');

  Array.prototype.forEach.call(elements, (elem) => {
    elem.addEventListener('click', () => {
      let perentItem = elem.parentElement.parentElement;
      let perentList = elem.parentElement.querySelector('.footer__list-under');
      
    
      perentList.classList.toggle('footer__list-active');
      elem.classList.toggle('after-none');
    })
  })
  
  const servicebtn = document.querySelector('.header__service--btn'),
        serviceunder = document.querySelector('.header__service--listunder');


  servicebtn.addEventListener('click', () => {
    serviceunder.classList.toggle('active');
  }) 
  const navbtn1 = document.querySelectorAll('.navigation__btn');

  Array.prototype.forEach.call(navbtn1, (elem) => {
    elem.addEventListener('click', () => {
      let perentItem = elem.parentElement.parentElement;
      let perentList = elem.parentElement.querySelector('.navigationunder1__list');
      
    
      perentList.classList.toggle('under__list--active');
    })
  }) 

  const backbtn = document.querySelectorAll('.backbtn');

  Array.prototype.forEach.call(backbtn, (elem) => {
    elem.addEventListener('click', () => {
      let perentItem = elem.parentElement.parentElement;
      
    
      perentItem.classList.toggle('under__list--active');
    })
  }) 
  
  const navbtn2 = document.querySelectorAll('.navigationunder1__btn');

  Array.prototype.forEach.call(navbtn2, (elem) => {
    elem.addEventListener('click', () => {
      let perentItem = elem.parentElement.parentElement;
      let perentList = elem.parentElement.querySelector('.navigationunder2__list');
      
    
      perentList.classList.toggle('under__list--active');
    })
  }) 
}




