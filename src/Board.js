function Board(){
  this.grid = this.getGrid()
}

Board.prototype.getGrid = function(){

  function toArray(nodeList){
    return Array.prototype.slice.call(nodeList);
  }

  function cellValue(cell){
    return cell.innerHTML
  }

  function cellValues(row){
    var cells = toArray(row.children)
    return cells.map(cellValue)
  }

  function extractCellValuesFromRows(rows){
    return rows.map(cellValues)
  }

  function extractGridValues(nl){
    var rows = toArray(nl)
    return extractCellValuesFromRows(rows)

  }

  var row_nodes = document.body.querySelectorAll('tr')
  var grid = extractGridValues(row_nodes)

  return grid
}



