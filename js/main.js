(function () {
    var menu = document.querySelector('ul');
    var menulink = document.querySelector('img');

    menulink.addEventListener('click', function (e) {
        menu.classList.toggle('active');
        e.preventDefault();
    });
})();