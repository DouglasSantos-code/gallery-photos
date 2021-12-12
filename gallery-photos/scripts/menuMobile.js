function initMenuMobile() {
    const $buttonMenu = document.querySelector('[data-menu="button"]');
    const $listMenu = document.querySelector('[data-menu="list"]');
    $buttonMenu.addEventListener('click', () => {
        $listMenu.classList.toggle('menu-show');
        $buttonMenu.classList.toggle('menu-rotate');
    });
}
initMenuMobile()