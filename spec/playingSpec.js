describe("On My Turn", function(){

  it("the symbol is an X", function(){
    expect(game.turn%2).toEqual(0)
    expect(game.currentPlayerSymbol()).toEqual("X")
  })

  describe("Clicking on an empty cell", function(){

    it("shows an X", function(){
      randomlyClick()
      expect(target_cell.innerHTML).toEqual("X")
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
      target_cell = document.body.querySelectorAll('td')[8]
      target_cell.click()
      var initial_cell_value = target_cell.innerHTML
      target_cell.click()
      var cell_value = target_cell.innerHTML
      expect(cell_value).toEqual(initial_cell_value)
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
      expect(target_cell.innerHTML).toEqual("O")
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
      target_cell = document.body.querySelectorAll('td')[8]
      target_cell.click()
      var initial_cell_value = target_cell.innerHTML
      target_cell.click()
      var cell_value = target_cell.innerHTML
      expect(cell_value).toEqual(initial_cell_value)
    })

  })

})