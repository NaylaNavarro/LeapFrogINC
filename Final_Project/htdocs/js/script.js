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
  
const blackPawn = document.querySelectorAll(".aBPawn");
blackPawn.forEach((pawn) => {
    pawn.addEventListener("click", () => {
        alert("Black Pawn clicked!");
    });
});