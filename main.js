


document.addEventListener("DOMContentLoaded", function() {

  var canvas = document.getElementsByClassName('canvas')[0]

  for (let i = 0; i < 120; i++){
    let box = document.createElement('div')
    box.classList.add('box')
    canvas.appendChild(box)
  }

  let palette = document.getElementsByClassName('colors')[0]

  let swatch = document.getElementById('swatch')

  palette.addEventListener('click', function(event){

    let currentColor = event.target.className
    swatch.className = currentColor

    canvas.addEventListener('click', function(event){
    event.target.className = currentColor
    })
  })
})
