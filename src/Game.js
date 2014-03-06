function Game(){
  this.players = ["X","O"]
  this.turn = 0
  this.over = "false"
  this.board = new Board()
}

Game.prototype.evaluate = function(){
  var that = this
  this.checkForWinner(function(gameover){
    if (gameover){
      //
    } else {
      that.nextTurn()
    }
  })
}

Game.prototype.nextTurn = function(){
  return this.turn++
}

Game.prototype.currentPlayerSymbol = function(){
  return this.players[ this.turn%2 ]
}

Game.prototype.checkForWinner = function(cb){
  cb(false)
  // var current_grid = this.board.getGrid()
  // return this.checkRows(current_grid)
}

Game.prototype.checkRows = function(current_grid){

  current_grid.forEach(function(row){
    return false
  })

}