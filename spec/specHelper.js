var game, playingBoard, board, cell

document.addEventListener('DOMContentLoaded', function(){
  playingBoard = document.body.querySelector('.game-board')
  cells = document.body.querySelectorAll('td');

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

function setCells(array,forced_mark){
  array.forEach(function(cell_index){
    cells[cell_index].innerHTML = forced_mark || game.currentPlayerSymbol()
  })
}

function clickCell(index){
  var cells = document.body.querySelectorAll('td');
  cells[index].click()
}

// function setupRun(array,mark){
//   var indicies_of_cells_to_set = array.slice(array.length)
//   var index_of_cell_to_click = array.unshift()
//   setCells(indicies_of_cells_to_set, mark, function(cells){
//     cells[index_of_cell_to_click].click()
//   })
// }

function buildTestGrid(index_of_click,mark){
  var grid = [ ["","",""],  ["","",""],  ["","",""] ]
  grid[Math.floor(index_of_click/3)][index_of_click%3] = mark
  return grid
}
