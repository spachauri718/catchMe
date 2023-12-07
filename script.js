let box = document.getElementById('box');
const heightofscreen = window.innerHeight - box.clientHeight
const widthofscreen = window.innerWidth - box.clientWidth
function handleEvent(){
    let topmargin = Math.floor(Math.random()*1000)
    box.style.marginTop= `${topmargin}px`;
}


box.addEventListener('mouseover',handleEvent)
box.addEventListener('click',handleEvent)