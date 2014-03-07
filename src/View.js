function View(){
  this.playingBoard = document.querySelector('.game-board')
  this.emptyBoardHTML = document.querySelector('.game-board').innerHTML
  this.cells = document.body.querySelectorAll('td') //
}

View.prototype.setClickListeners = function(){
  cells = document.body.querySelectorAll('td') //
  Array.prototype.forEach.call(cells, function(cell){
    cell.addEventListener('click', function(e){
      viewControl.markCell(e)
    })
  })
}

View.prototype.resetBoard = function(){
  this.playingBoard.innerHTML = this.emptyBoardHTML
  this.setClickListeners()
}

View.prototype.markCell = function(e){
  var cell_value = e.target.innerHTML
  if (cell_value.length == 0){
    e.target.innerHTML = game.currentPlayerSymbol() //
    game.evaluate() //
  }
}