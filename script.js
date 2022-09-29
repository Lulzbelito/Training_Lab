
let botones = document.querySelectorAll('.btn1')
let toggler = document.querySelector('.navbar-toggler')

const fBotones = () => {
    botones.forEach(element => {
        element.addEventListener('click', () => {
            setTimeout(() => {
                toggler.click()
            }, 500);
        })
    });
}

fBotones()
