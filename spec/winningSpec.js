describe("We Have a Winner!", function(){

  describe("Player connects three cells", function(){

    it("forming a row", function(){
      setCells([3,4], "X")
      clickCell(5)
      expect(game.over).toEqual(true)
    })

    it("forming a column", function(){
      setCells([2,5], "X")
      clickCell(8)
      expect(game.over).toEqual(true)
    })

    it("forming a diagonal", function(){
      setCells([2,4], "X")
      clickCell(6)
      expect(game.over).toEqual(true)
    })

  })

  describe("After winning", function(){

    it("a player can chose to start a new round", function(){
      setCells([3,4], "X")
      clickCell(5) //win
      // player choses to continue playing
      expect(game.round).toEqual(2)
      expect(game.turn).toEqual(0)
      var start_board = [ ["","",""],  ["","",""],  ["","",""] ]
      expect(board.getGrid()).toEqual(start_board)
    })

  })

})