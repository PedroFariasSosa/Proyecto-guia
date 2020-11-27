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

//const colorSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

//colorSwitch.addEventListener('change', switchColor, false)

// function switchColor (e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'light')
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark')
//   }
// }

const botonSwitch = document.querySelector('#switch')

botonSwitch.addEventListener('click', () => {
  document.body.classList.toggle('light')
  botonSwitch.classList.toggle('active')
})