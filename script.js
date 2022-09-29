let botones = document.querySelectorAll('.btn1')
let toggler = document.querySelector('.navbar-toggler')
let mediaQuery = window.matchMedia('(max-width: 1023px)')

const fBotones = () => {
    handleQuery(mediaQuery)
}

const timeOut = () => {
    setTimeout(() => {
        toggler.click()
    }, 500);
}

const handleQuery = (e) => {
    console.log(e)
    if (e.matches) {
        botones.forEach(e => {
            e.addEventListener('click', timeOut)
        });
    }
    else {
        botones.forEach(e => {
            e.removeEventListener('click', timeOut)
        })
    }
}

mediaQuery.addEventListener('change', handleQuery)

fBotones()
