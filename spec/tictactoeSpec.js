////Tests

var game

describe("The Game Board", function() {
  it("is a 3 x 3 grid", function() {
    var board = new Board()
    start_board = [ ["","",""],  ["","",""],  ["","",""] ]
    expect(board.grid).toEqual(start_board)
  })
})

describe("On My Turn", function() {
  // var game

  beforeEach(function() {
    game = new Game()
  })

  it("the symbol is an X", function(){
    expect(game.turn).toEqual(0)
    expect(game.currentPlayerSymbol()).toEqual("X")
  })

  describe("Clicking on an empty cell", function() {

    it("shows an X", function() {
      var cell = document.body.querySelector('td')
      cell.click()
      expect(cell.innerHTML).toEqual("X")
    })

    it("updates the grid", function() {
      var board = new Board()
      var updated_grid = [ ["X","",""],  ["","",""],  ["","",""] ]
      expect(board.grid).toEqual(updated_grid)
    })

    it("ends the turn", function(){
      expect(game.currentPlayerSymbol).toEqual("O")
    })

  })

  describe("Clicking on a taken cell", function() {

    it("does nothing", function() {
      var cell = document.body.querySelectorAll('td')[8]
      var cell_value_before_click = cell.innerHTML = "Z"
      cell.click()
      expect(cell.innerHTML).toEqual(cell_value_before_click)
      cell.innerHTML = ""
    })

  })

})

describe("On Your Turn", function() {
  // var game

  beforeEach(function() {
    game = new Game()
    game.turn = 1
  })

  it("the symbol is an O", function(){
    expect(game.turn).toEqual(1)
    expect(game.currentPlayerSymbol()).toEqual("O")
  })

  describe("Clicking on an empty cell", function() {

    it("shows an O", function() {
      var cell = document.body.querySelectorAll('td')[1]
      cell.click()
      expect(cell.innerHTML).toEqual("O")
    })

    it("updates the grid", function() {
      var board = new Board()
      var updated_grid = [ ["X","O",""],  ["","",""],  ["","",""] ]
      expect(board.grid).toEqual(updated_grid)
    })

    it("ends the turn", function(){
      expect(game.currentPlayerSymbol).toEqual("X")
    })

  })

  describe("Clicking on a taken cell", function() {

    it("does nothing", function() {
      var cell = document.body.querySelectorAll('td')[7]
      var cell_value_before_click = cell.innerHTML = "Z"
      cell.click()
      expect(cell.innerHTML).toEqual(cell_value_before_click)
      cell.innerHTML = ""
    })

  })

})



//At the end of the game a row, column, or digonal should be full or else the board should be full


//////Game Play

//If I click on the same square twice, nothing should happen

//At the end of every odd round there should be an odd number of x's and o's

//At the end of every even round there should be an equal number of x's and o's


//////Strategy
////Offense
//If the center is available, take it
//If a row, column, or diagonal is empty except for me, fill it.
//Else, if a row, column, or diagonal is empty, fill it.

////Defense
//If there are two x's in a row, column, or diagonal, block it

//////Winning
// three in a row

// three in a column

// three diagonal

//If I win I should see "You win"

//If the computer wins I should see "Computer wins"