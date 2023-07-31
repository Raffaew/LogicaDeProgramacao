let lines = document.getElementById("lines");
let btn = document.getElementById("btn");
let answer = document.getElementById("stars");

function creatStars() {
  let star = Number(lines.value);
  let sumStars = ""; // variável contadora
  let lineStars = ""; // variável acumuladora

  for (let i = 1; i <= star; i++) {
    sumStars += "*";
    lineStars += sumStars + "\n";
    console.log(lineStars)
  }
  answer.textContent = lineStars;
}

btn.addEventListener("click", creatStars);
