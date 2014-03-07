function Game(){
  this.players = ["X","O"]
  this.turn = 0
  this.over = false
  this.board = new Board()
}

Game.prototype.evaluate = function(){
  var that = this
  this.checkForWinner(function(we_have_a_winner){
    if (we_have_a_winner){
      game.over = true
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
  var current_grid = this.board.getGrid()
  if ( this.checkRows(current_grid) ){
    cb(true)
  } else {
    cb(false)
  }
}

Game.prototype.checkRows = function(current_grid){
  var streak = false
   current_grid.forEach(function(row){
      if (!(row[0] == "") && row[0] == row[1] && row[1] == row[2]){
        streak = true
      }
    })
  return streak
}