let rYes = document.getElementById("rYes");
let rNo = document.getElementById("rNo");
let conv = document.getElementById("conv");

rYes.addEventListener("change", function () {
  conv.className = "exibe";
});

rNo.addEventListener("change", function () {
  conv.className = "oculta";
});

function covenant() {
  let inPrice = document.getElementById("inPrice");
  let inConv = document.getElementById("inConv");
  let price = Number(inPrice.value);

  if (price <= 0 || isNaN(price)) {
    alert("Insira um valor correto!");
    inPrice.value = "";
    inPrice.focus();
    return;
  }

  let desc = 10;

  if (rYes.checked && inConv.value == "opt1") {
    desc = 20;
  } else if (rYes.checked && inConv.value == "opt2") {
    desc = 50;
  }
  let calcDesc = calculate(price, desc);
  let calcTotal = price - calcDesc;

  document.getElementById(
    "answerDesc"
  ).textContent = `Desconto R$: ${calcDesc.toFixed(2)}`;
  document.getElementById(
    "answerTotal"
  ).textContent = `A Pagar R$: ${calcTotal.toFixed(2)}`;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", covenant);
let key = document.getElementById("inPrice");
key.addEventListener("keypress", function(e) {
    if(e.keyCode === 13) {
        covenant();
    }
})

function calculate(value, rate) {
  let answer = (value * rate) / 100;
  return answer;
}
