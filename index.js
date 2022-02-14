const div1 = document.querySelector('.div-1')
const allLi = document.querySelectorAll('li')

allLi.forEach( (li, index)  => {
    
    li.addEventListener("click", e => {
        div1.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")

        const indicador = document.querySelector(".indicador")
        indicador.style.transform = `translateX(calc(${index * 90}px))`
    })
})