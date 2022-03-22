// grabs the element by id
navigate = document.getElementById('navigate')

// grabs the element by id
menu = document.getElementById('menu')

// attaches a listener to menu
menu.addEventListener('click',

    function () {
        navigate.classList.toggle('show')
    })