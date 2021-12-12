function initDarkMode(){
  const $html = document.querySelector('html');
  const $input = document.querySelector('#switch');
  const $logoMenu = document.querySelector('[data-mode]')
  $input.addEventListener('change', ()=>{
    $html.classList.toggle('dark-mode')
    $logoMenu.classList.toggle('logo-darkMode')
  })
}
initDarkMode()