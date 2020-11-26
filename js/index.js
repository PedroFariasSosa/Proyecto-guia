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

const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
  // Cambio de tema del sitio web
  document.body.classList.toggle('light')
  document.contenedor__enlace.toggle('light')
})