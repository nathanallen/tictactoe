var game, playingBoard, board, cell

document.addEventListener('DOMContentLoaded', function(){
  playingBoard = document.body.querySelector('.game-board')
})

function resetBoard(){
  playingBoard = playingBoard || document.body.querySelector('.game-board')
  document.body.querySelector('.game-board').remove()
  document.body.appendChild(playingBoard)
}

function resetActiveCell(){
  if (cell) {
    cell.innerHTML = ""
  }
}

function randomCellIndex(){
  return Math.random().toString()[3]%8
}

function randomlyClick(cb,mark){
  var random_index = randomCellIndex()
  cell = document.body.querySelectorAll('td')[random_index]
  cell.click()

  if (cb){
    return cb(random_index,mark)
  } 
}

function buildTestGrid(index_of_click,mark){
  var grid = [ ["","",""],  ["","",""],  ["","",""] ]
  grid[Math.floor(index_of_click/3)][index_of_click%3] = mark
  return grid
}

afterEach(function(){
  resetBoard()
  resetActiveCell()
})

beforeEach(function(){
  game = new Game()
  board = new Board()
})