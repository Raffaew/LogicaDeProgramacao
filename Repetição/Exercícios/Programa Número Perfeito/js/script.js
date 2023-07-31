function perfectNum() {
    let num = document.getElementById("num");
    let divs = document.getElementById("divs");
    let answer = document.getElementById("answer");
  
    let valueNum = Number(num.value);
    let totalDivs = "";
    let sumDivs = 0;
  
    for (let i = 2; i < valueNum; i++) {
      if (valueNum % i == 0) {
        totalDivs+= ", " + i;
        sumDivs += i;
      }
      divs.textContent = `Divisores do ${valueNum}: 1${totalDivs} (soma ${
        sumDivs + 1
      })`;
    }
    if (sumDivs + 1 == valueNum) {
      answer.textContent = `${valueNum} É um número perfeito`;
    } else {
      answer.textContent = `${valueNum} Não é um número perfeito`;
    }
  }
  
  let btn = document.getElementById("btn");
  btn.addEventListener("click", perfectNum);