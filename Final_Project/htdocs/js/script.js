function setTheme(classic) {
    localStorage.setItem("classic", themeName);
}
function setTheme(dark) {
    localStorage.setItem("dark", themeName);
}
function setTheme(green) {
    localStorage.setItem("green", themeName);
}
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

//debug function to show coordinates of the square clicked
document.querySelectorAll(".chess-square").forEach(square => {
    square.addEventListener("click", () => {
        let row = square.getAttribute("data-row");
        let col = square.getAttribute("data-col");
        console.log(`Square clicked: Row ${row}, Column ${col}`);
    });
});

//movement logic
let selectedSquare = null;
let currentPlayer = "white";

document.querySelectorAll(".chess-square").forEach(square => {
    square.addEventListener("click", () => {
        let row = parseInt(square.getAttribute("data-row"));
        let col = parseInt(square.getAttribute("data-col"));

        if(selectedSquare === null){
            if(board[row][col] !== ""){
                selectedSquare = {row, col};
                square.classList.add("selected");
            }
        }else{
            attemptMove(selectedSquare.row, selectedSquare.col, row, col);
            document.querySelector(".selected")?.classList.remove("selected");
            selectedSquare = null;
        }
    });
});

function attemptMove(sr, sc, er, ec){
    const piece = board[sr][sc];
    if(piece == "") return;

    board[er][ec] = piece;
    board[sr][sc] = "";
    renderBoard();
}

function renderBoard(){
        for(row=0; row<8; row++){
        for(col=0; col<8; col++){
            let arraySpace = board[row][col];
            console.log(arraySpace);
            let selector = `div[data-col="${col}"][data-row="${row}"]`;
            let square = document.querySelector(selector);
            if(arraySpace == "r"){
                square.innerHTML = "jjjjjjjjj";
            }
        }
    }
}
