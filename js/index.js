const typed = new Typed('.typed', {
  strings: [
    'Ing en Sistemas',
    'Desarrollador Web',
    'Diseñador UX'
  ],
  stringsElement: 'null',
  typeSpeed: 75,
  starDelay: 300,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: false,
  showCursor: '|',
  contentType: 'html'
})

// Variables
const botonSwitch = document.querySelector('#switch')

// Add Evenlisteners
botonSwitch.addEventListener('click', switchTogle)

// Functions
function switchTogle() {
  document.body.classList.toggle("light");
  botonSwitch.classList.toggle("active");
}