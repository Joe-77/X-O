let title = document.getElementById("name"),
  turn = "X";

let Square = [];

function Done(num1, num2, num3) {
  title.innerHTML = `${Square[num1]} Winner`;
  document.getElementById("item" + num1).style.backgroundColor =
    "rgb(130, 13, 13)";
  document.getElementById("item" + num2).style.backgroundColor =
    "rgb(130, 13, 13)";
  document.getElementById("item" + num3).style.backgroundColor =
    "rgb(130, 13, 13)";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function win() {
  for (let i = 1; i < 10; i++) {
    Square[i] = document.getElementById("item" + i).innerHTML;
  }

  if (Square[1] == Square[2] && Square[2] == Square[3] && Square[1] != "") {
    Done(1, 2, 3);
  } else if (
    Square[4] == Square[5] &&
    Square[5] == Square[6] &&
    Square[4] != ""
  ) {
    Done(4, 5, 6);
  } else if (
    Square[7] == Square[8] &&
    Square[8] == Square[9] &&
    Square[7] != ""
  ) {
    Done(7, 8, 9);
  } else if (
    Square[1] == Square[4] &&
    Square[4] == Square[7] &&
    Square[4] != ""
  ) {
    Done(1, 4, 7);
  } else if (
    Square[2] == Square[5] &&
    Square[5] == Square[8] &&
    Square[5] != ""
  ) {
    Done(2, 5, 8);
  } else if (
    Square[3] == Square[6] &&
    Square[6] == Square[9] &&
    Square[6] != ""
  ) {
    Done(3, 6, 9);
  } else if (
    Square[1] == Square[5] &&
    Square[5] == Square[9] &&
    Square[5] != ""
  ) {
    Done(1, 5, 9);
  } else if (
    Square[3] == Square[5] &&
    Square[5] == Square[7] &&
    Square[7] != ""
  ) {
    Done(3, 5, 7);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML === "") {
    title.innerHTML = "O";
    element.innerHTML = "X";
    turn = "O";
  } else if (turn === "O" && element.innerHTML === "") {
    title.innerHTML = "X";
    element.innerHTML = "O";
    turn = "X";
  }
  win();
}
