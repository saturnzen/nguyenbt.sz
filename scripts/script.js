// Tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard clause
  if (!clicked) return;

  if (clicked) {
    //Remove active classes

    tabs.forEach(t => {
      // console.log(t);
      t.style.background = '#fff'
      t.classList.remove('d-none')});
    tabsContent.forEach(t => {
      t.classList.add('d-none');
    
    
    });

    //Active Tab
    clicked.classList.remove('d-none');
    clicked.style.background = '#04aa6d'
    
    //Active content area
    console.log(clicked.dataset.tab);
    console.log( clicked.getAttribute('href'));
    document
      .querySelector(`#${clicked.getAttribute('href').slice(1)}`)
      .classList.remove('d-none');
      
      
      const checIdSelected = function(f1, f2, f3){
        const idSelected = clicked.getAttribute('href').slice(1);
        return idSelected === f1 || idSelected === f2 || idSelected === f3 ;
        
      };
      if(checIdSelected('target', 'personal-info')){
      document.querySelector("#about").classList.remove('d-none');
      // document.querySelectorAll(".slider__btn")
      //   .forEach(t=> t.classList.add('d-none'))
      ;
    }

    if (checIdSelected("certificate", "project", "job-info")){
      document.querySelector("#about").classList.add('d-none')
      imgTargets.forEach(img => imgObserver.observe(img))
    }
    
  }
});

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

let reachTo = 2

// Lazy loading images  Bankist app - jonas schmedtmann
const imgTargets = document.querySelectorAll('.certificate_container_flex')

imgTargets.forEach(cert => cert.classList.add("d-none"))
document.querySelector('.cert--1').classList.remove("d-none")

const loadImg = function(entries, observer){

  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;

  //Replace src with data-src
  // entry.target.src = entry.target.dataset.src
  
  const newspaperContainers = document.querySelectorAll("#footer")
  const certEls = document.querySelectorAll(`.cert--${reachTo}`)
  certEls.forEach(cert => cert.classList.remove('d-none'))
  reachTo ++
  if (reachTo === 7) reachTo = 2
  // console.log(reachTo);
  // observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {

  root: null,
  threshold: 0,
  rootMargin: '0px',
})
