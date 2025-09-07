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
      // imgTargets.forEach(img => imgObserver.observe(img))
    }
    
  }
});



let reachTo = 2

// Lazy loading images  Bankist app - jonas schmedtmann
const imgTargets = document.querySelectorAll('.certificate_container_flex')

imgTargets.forEach(cert => cert.classList.add("d-none"))
// document.querySelector('.cert--1').classList.remove("d-none")

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
  if (reachTo === 14) reachTo = 2
  // console.log(reachTo);
  // observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {

  root: null,
  threshold: 0,
  rootMargin: '0px',
})
