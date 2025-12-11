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
    let selector = `div[data-col="${sc}"][data-row="${sr}"]`;
    console.log(board);
    renderBoard();
}

function renderBoard(){
        for(row=0; row<8; row++){
        for(col=0; col<8; col++){
            let arraySpace = board[row][col];
            console.log(arraySpace);
            let selector = `div[data-col="${col}"][data-row="${row}"]`;
            let square = document.querySelector(selector);
            if(arraySpace == ""){
                square.innerHTML = "";
            }
            if(arraySpace == "r"){
                square.innerHTML = `<img src = "Images/Chess_rlt60.png">`;
            }
            if(arraySpace == "R"){
                square.innerHTML = `<img src = "Images/Chess_rdt60.png">`;
            }
            if(arraySpace == "n"){
                square.innerHTML = `<img src = "Images/Chess_nlt60.png">`;
            }
            if(arraySpace == "N"){
                square.innerHTML = `<img src = "Images/Chess_ndt60.png">`;
            }
            if(arraySpace == "b"){
                square.innerHTML = `<img src = "Images/Chess_blt60.png">`;
            }
            if(arraySpace == "B"){
                square.innerHTML = `<img src = "Images/Chess_bdt60.png">`;
            }
            if(arraySpace == "q"){
                square.innerHTML = `<img src = "Images/Chess_qlt60.png">`;
            }
            if(arraySpace == "Q"){
                square.innerHTML = `<img src = "Images/Chess_qdt60.png">`;
            }
            if(arraySpace == "k"){
                square.innerHTML = `<img src = "Images/Chess_klt60.png">`;
            }
            if(arraySpace == "K"){
                square.innerHTML = `<img src = "Images/Chess_kdt60.png">`;
            }
            if(arraySpace == "p"){
                square.innerHTML = `<img src = "Images/Chess_plt60.png">`;
            }
            if(arraySpace == "P"){
                square.innerHTML = `<img src = "Images/Chess_pdt60.png">`;
            }
        }
    }
}
