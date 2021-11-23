(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', toggleElements);
    window.addEventListener('resize', offElements);

    function toggleElements() {
        const $arrayToggles = Array.from($toggles);
        $arrayToggles.forEach((toggle) => {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        if (window.innerWidth > 1024) {
            const $arrayToggles = Array.from($toggles);
            $arrayToggles.forEach((toggle) => {
                toggle.classList.remove('on');
            });
        }
    }

    // function toggleElements() {
    //     [].forEach.call($toggles, function (toggle) {
    //         toggle.classList.toggle('on');
    //     });
    // }
    
})(window, document)