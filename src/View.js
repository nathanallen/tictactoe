function View(){
  this.playingBoard = document.querySelector('.game-board')
  this.emptyBoardHTML = document.querySelector('.game-board').innerHTML
  this.cells = document.body.querySelectorAll('td') //
  this.setClickListeners()
}

View.prototype.setClickListeners = function(){
  var that = this
  cells = document.body.querySelectorAll('td') //
  Array.prototype.forEach.call(cells, function(cell){
    cell.addEventListener('click', function(e){
      that.markCell(e)
    })
  })
}

View.prototype.resetBoard = function(){
  this.playingBoard.innerHTML = this.emptyBoardHTML
  this.setClickListeners()
}

View.prototype.markCell = function(e){
  var cell_value = e.target.innerHTML  // remove "Z" from tests
  if (cell_value.length == 0){
    e.target.innerHTML = game.currentPlayerSymbol() //
    game.evaluate() //
  }
}

View.prototype.weHaveAWinner = function(player, cb){
  var confirmation = confirm("Player " + player + " wins! Next game?")
  if (confirmation){
    cb()
  }
}
