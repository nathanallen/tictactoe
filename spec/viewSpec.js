describe("The Game Board", function(){
  it("is a 3 x 3 grid", function(){
    start_board = [ ["","",""],  ["","",""],  ["","",""] ]
    expect(board.getGrid()).toEqual(start_board)
  })
})