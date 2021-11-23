window.addEventListener('DOMContentLoaded', () => {

    // -****************************TABS******************************************

    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');


        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        }); 
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    } 

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // -****************************************************TIMER**************************************

    const deadline = '2022-01-01';

    const getTimeRemaining = endtime => {
        const t = Date.parse(endtime) - new Date(),
              days = Math.floor( t / (1000 * 60 * 60 * 24)),
              hours = Math.floor( (t / (1000 * 60)) % 24),
              minutes = Math.floor( (t / (1000 * 60)) % 60),
              seconds = Math.floor( (t / 1000) % 60)

        return {
            'total': t,
            'days' : days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    const setClock = (selector, endtime) => {
        const  timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval( updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if(t.total <=0) {
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('.timer', deadline);



    // -*******************MODAL************************

    const   modalTrigger = document.querySelectorAll(' [data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
        });
    })


    function closeModal() {

        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }


    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {

        if (e.target === modal) {
            closeModal();
        }
    });

    // document.addEventListener('keydown', (e) => {
    //     if(e.code === "Spase" ) {
    //         closeModal();
    //    }
    // });
});
