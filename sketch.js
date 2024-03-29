function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  checkerBoard(200, 50, 200, 8, 'tan', 'black');
  checkerBoard(0, 50, 200, 8, 'red', 'black');
  checkerBoard(400, 25, 300, 9, 'tan', 'red');
}

function checkerBoard(x, y, boardSize, sqCount, color1, color2) {
  let sqSize = boardSize / sqCount;
  for (let row = 0; row < sqCount; row++) {
    for (let col = 0; col < sqCount; col++) {
      //if-else statement for alternating colors
      if ((row + col) % 2 === 0) {
        fill(color1);
      } else {
        fill(color2);
      }
      //creates the squares
      square(col * sqSize + x, row * sqSize + y , sqSize);
    }
  }
}