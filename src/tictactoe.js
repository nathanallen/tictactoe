var game = new Game()

document.addEventListener('DOMContentLoaded', function(){

  cells = document.body.querySelectorAll('td')
  Array.prototype.forEach.call(cells, function(cell){
    cell.addEventListener('click', function(e){
      var cell_value = e.target.innerHTML
      if (cell_value.length == 0){
        e.target.innerHTML = game.currentPlayerSymbol()
        game.evaluate()
      }
    })
  })

})

