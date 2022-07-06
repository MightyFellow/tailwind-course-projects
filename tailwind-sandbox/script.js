let imageGroup = document.querySelector('.image-group');
let zoomDiv = document.querySelector('.image-zoom');
let zoomedImg = document.querySelector('.image-zoom>img')

imageGroup.addEventListener('mousemove',(e) => {
  zoomDiv.style.display = "block"
  let y = (e.clientY - 307)/(513-307);
  let x = e.clientX/292;
  zoomedImg.style.transform = `translate3d(${1920*2.5}px,${}px,0px)`
})
imageGroup.addEventListener('mouseleave', (e) => {
    zoomDiv.style.display = "none"
})
