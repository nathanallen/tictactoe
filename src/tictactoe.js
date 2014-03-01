document.addEventListener('DOMContentLoaded', function(){

  cells = document.body.querySelectorAll('td')
  Array.prototype.forEach.call(cells, function(cell){
    cell.addEventListener('click', function(e){
      e.target.innerHTML = "X"
    })
  })


})

