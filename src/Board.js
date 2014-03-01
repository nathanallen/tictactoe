function Board(){}

Board.prototype.cells = function(){

  function toArray(nodeList){
    return Array.prototype.slice.call(nodeList);
  }

  function extractCellValues(cells){
    return cells.map(function(cell){
     return cell.innerHTML
    })
  }

  var cellNodes = document.body.querySelectorAll('td')
  var cellList = toArray(cellNodes)
  var cell_values = extractCellValues(cellList)

  return cell_values
}


