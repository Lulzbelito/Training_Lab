
let botones = document.querySelectorAll('.btn1')

const fBotones = () => {
    botones.forEach(element => {
        element.addEventListener('click', () => {
            let hB = document.querySelector('.offcanvas')
            let hBB = document.querySelector('.offcanvas-backdrop') 
            hB.classList.toggle(`show`)
            hBB.classList.toggle(`show`)
        })
    });
}

