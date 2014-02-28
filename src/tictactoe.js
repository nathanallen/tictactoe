document.addEventListener('DOMContentLoaded', function(){

  cell = document.body.querySelector('td')
  cell.addEventListener('click', function(e){
    e.target.innerHTML = "X"
  })

})

