document.addEventListener('DOMContentLoaded', function(){

  // var game //already defined in tictactoeSpec.js

  cells = document.body.querySelectorAll('td')
  Array.prototype.forEach.call(cells, function(cell){
    cell.addEventListener('click', function(e){
      var value = e.target.innerHTML
      e.target.innerHTML = value || game.currentPlayerSymbol()
    })
  })


})

