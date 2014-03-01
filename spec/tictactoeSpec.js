////Tests

//////Game Board View
describe("The Game Board", function() {
  // it("is a 3 x 3 grid", function() {
  //   var board = new Board()
  //   start_board = [ ["","",""],  ["","",""],  ["","",""] ]

  //   expect(board.grid).toBe(start_board);
  // });
});

describe("Clicking on a cell", function() {


  it("shows an X", function() {
    var cell = document.body.querySelector('td')
    cell.click()
    expect(cell.innerHTML).toEqual("X");
  });

  it("updates the grid", function() {
    var board = new Board();
    var updated_grid = [ ["X","",""],  ["","",""],  ["","",""] ]
    expect(board.grid).toEqual(updated_grid);
  });

});



//[ ["","",""],  ["","",""],  ["","",""] ]
// the board should be a 3 x 3 grid

//At the beginning of the game the board should be empty

//At the end of the game a row, column, or digonal should be full or else the board should be full


//////Game Play

//If I click on a square I should see an x

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