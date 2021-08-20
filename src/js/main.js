window.addEventListener('DOMContentLoaded', () => {


    const   tabContent = document.querySelectorAll('.tabcontent'),
            tabHeaderItem = document.querySelectorAll('.tabheader__item');
            tabHeaderItemActive = document.querySelector('.tabheader__item_active');

    function hideTabContent() {
        tabContent.forEach( item => {
            item.style.display = 'none';
        });
        tabContent.forEach(activ => {
           activ.classList.remove('tabheader__item_active');
        });
    }

    tabHeaderItem.addEventListener('click', () => {

    });        



});