const chessSquare = document.getElementById(".chess-square");

const newImage = document.createElement("img");
newImage.src = "118 Final Project\LeapFrogINC\Final_Project\htdocs\Images\Chess_bdt60.png";
document.querySelector(".chess-square").addEventListener("click", function(){
    this.appendChild(newImage);
});