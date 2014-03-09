function Game(){
  this.players = ["X","O"]
  this.round = 1
  this.turn = 0
  this.over = false
  this.board = new Board()
  this.viewControl = new View()
}

Game.prototype.evaluate = function(){
  var that = this
  this.checkForWinner(function(we_have_a_winner){
    if (we_have_a_winner){
      that.viewControl.weHaveAWinner(that.currentPlayerSymbol(), function(){
        that.reset()
      })
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
  if ( this.checkRows(current_grid) || this.checkColumns(current_grid) || this.checkDiagonals(current_grid) ){
    cb(true)
  } else {
    cb(false)
  }
}

Game.prototype.checkRows = function(current_grid){
  var that = this
  current_grid.forEach(function(row){
    if (row[0] && row[0] == row[1] && row[1] == row[2]){
      that.over = true
    }
  })
  return this.over
}

Game.prototype.checkColumns = function(current_grid){
  i = 3
  if (i--){
    if (current_grid[0][i] && current_grid[0][i] == current_grid[1][i] && current_grid[1][i] == current_grid[2][i]){
      this.over = true
    }
  }
  return this.over
}

Game.prototype.checkDiagonals = function(current_grid){
  var center = current_grid[1][1]
  if (center){
    var opposite_corners1 = (center == current_grid[0][0] && current_grid[0][0] == current_grid[2][2])
    var opposite_corners2 = (center == current_grid[0][2] && current_grid[0][2] == current_grid[2][0])
    if (opposite_corners1 || opposite_corners2){
      this.over = true
    }
  }
  return this.over
}

Game.prototype.reset = function(){
  this.round += 1
  this.turn = 0
  this.over = false
  this.viewControl.resetBoard()
}