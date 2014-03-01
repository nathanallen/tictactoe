document.addEventListener('DOMContentLoaded', function(){

  // var game //already defined in tictactoeSpec.js

  cells = document.body.querySelectorAll('td')
  Array.prototype.forEach.call(cells, function(cell){
    cell.addEventListener('click', function(e){
      var cell_value = e.target.innerHTML
      if (cell_value.length == 0){
        e.target.innerHTML = game.currentPlayerSymbol()
        game.nextTurn()
      }
    })
  })


})

