// select all squares
const squares = document.querySelectorAll(".square");

// colors
const LAVENDER = "#E6E6FA";
const COFFEE = "#6F4E37";

squares.forEach((square) => {

    // when mouse enters a square
    square.addEventListener("mouseenter", () => {
        squares.forEach((sq) => {
            if (sq !== square) {
                sq.style.backgroundColor = COFFEE;
            }
        });
    });

    // when mouse leaves the square
    square.addEventListener("mouseleave", () => {
        squares.forEach((sq) => {
            sq.style.backgroundColor = LAVENDER;
        });
    });

});