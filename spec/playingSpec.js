afterEach(function(){
  resetBoard()
  resetActiveCell()
})

beforeEach(function(){
  game = new Game()
  board = new Board()
})

describe("On My Turn", function(){

  it("the symbol is an X", function(){
    expect(game.turn%2).toEqual(0)
    expect(game.currentPlayerSymbol()).toEqual("X")
  })

  describe("Clicking on an empty cell", function(){

    it("shows an X", function(){
      randomlyClick()
      expect(cell.innerHTML).toEqual("X")
    })

    it("updates the grid", function(){
      var test_grid = randomlyClick(buildTestGrid, "X")
      expect(board.getGrid()).toEqual(test_grid)
    })

    it("ends the turn", function(){
      randomlyClick()
      expect(game.currentPlayerSymbol()).toEqual("O")
    })

  })

  describe("Clicking on a taken cell", function(){

    it("does nothing", function(){
      cell = document.body.querySelectorAll('td')[8]
      var cell_value_before_click = cell.innerHTML = "Z"
      cell.click()
      expect(cell.innerHTML).toEqual(cell_value_before_click)
    })

  })

})


describe("On Your Turn", function(){

  beforeEach(function(){
    game.turn = 1
  })

  it("the symbol is an O", function(){
    expect(game.turn%2).toEqual(1)
    expect(game.currentPlayerSymbol()).toEqual("O")
  })

  describe("Clicking on an empty cell", function(){

    it("shows an O", function(){
      randomlyClick()
      expect(cell.innerHTML).toEqual("O")
    })

    it("updates the grid", function(){
      var test_grid = randomlyClick(buildTestGrid, "O")
      expect(board.getGrid()).toEqual(test_grid)
    })

    it("ends the turn", function(){
      randomlyClick()
      expect(game.currentPlayerSymbol()).toEqual("X")
    })

  })

  describe("Clicking on a taken cell", function(){

    it("does nothing", function(){
      cell = document.body.querySelectorAll('td')[0]
      var cell_value_before_click = cell.innerHTML = "Z"
      cell.click()
      expect(cell.innerHTML).toEqual(cell_value_before_click)
    })

  })

})