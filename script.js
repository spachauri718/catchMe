let box = document.getElementById('box');
const heightofscreen = window.innerHeight - box.clientHeight
const widthofscreen = window.innerWidth - box.clientWidth
function handleEvent(){
    let topmargin = Math.floor(Math.random()*heightofscreen)
    let leftmargin = Math.floor(Math.random()*widthofscreen);
    box.style.marginTop= `${topmargin}px`;
    box.style.marginLeft= `${leftmargin}px`;
}


box.addEventListener('mouseover',handleEvent)
box.addEventListener('touchstart',handleEvent)
