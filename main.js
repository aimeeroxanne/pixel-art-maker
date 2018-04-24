


document.addEventListener("DOMContentLoaded", function() {

var canvas = document.getElementsByClassName('canvas')[0]
  for (let i = 0; i < 4; i++){
    let box = document.createElement('div')
    box.classList.add('box')
    canvas.appendChild(box)
  }

let palette = document.getElementsByClassName('colors')[0]

palette.addEventListener('click', function(event){
  console.log(event.target)
  let currentColor = event.target.className
  console.log(currentColor)
  canvas.addEventListener('click', function(event){
    event.target.className = currentColor
  })
})

})
