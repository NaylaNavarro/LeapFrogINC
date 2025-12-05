// 8 rows, 8 columns
//uppercase = black pieces
//lowercase = white pieces
let board = [
    ["r","n","b","k","q","b","n","r"],  // row 0 (White back rank)
    ["p","p","p","p","p","p","p","p"],  // row 1
    ["","","","","","","",""],          // row 2
    ["","","","","","","",""],          // row 3
    ["","","","","","","",""],          // row 4
    ["","","","","","","",""],          // row 5
    ["P","P","P","P","P","P","P","P"],  // row 6
    ["R","N","B","K","Q","B","N","R"]   // row 7 (Black back rank)
  ];

  document.querySelectorAll(".chess-square").forEach(square => {
    square.addEventListener("click", () => {
        let row = square.getAttribute("data-row");
        let col = square.getAttribute("data-col");
        console.log(`Square clicked: Row ${row}, Column ${col}`);
    });
});