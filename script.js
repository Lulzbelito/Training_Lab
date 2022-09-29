
let botones = document.querySelectorAll('.btn1')
let hB = document.querySelector('.offcanvas')


const fBotones = () => {
    botones.forEach(element => {
        element.addEventListener('click', () => {
            let hBB = document.querySelector('.offcanvas-backdrop') 
            hB.classList.remove(`show`)
            hBB.classList.remove(`show`)
        })
    });
}

fBotones()
