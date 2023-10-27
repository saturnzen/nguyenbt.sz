// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return;

  if (clicked) {
    //Remove active classes

    tabs.forEach(t => {
      console.log(t);
      t.classList.remove('d-none')});
    tabsContent.forEach(t => t.classList.add('d-none'));

    //Active Tab
    clicked.classList.remove('d-none');

    //Active content area
    console.log(clicked.dataset.tab);
    console.log( clicked.getAttribute('href'));
    document
      .querySelector(`#${clicked.getAttribute('href').slice(1)}`)
      .classList.remove('d-none');
  }
});