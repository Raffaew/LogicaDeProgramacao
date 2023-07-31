let numbers = [];
function orderNumber() {
  let inNum = document.getElementById("inNum");
  let num = Number(inNum.value);

  if (inNum.value == "" || isNaN(inNum.value) || numbers.indexOf(num) >= 0) {
    alert("Número inválido, ou ja existente na lista");
    inNum.value = "";
    inNum.focus();
    return;
  }
  numbers.push(num);
  inNum.focus();
  inNum.value = "";

  for (let i = 0; i < numbers.length; i++) {
    document.getElementById("outNum").textContent = "Números: " + numbers.join(",");
  }
  
}
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", orderNumber);

function order () {
    let order = true;

    for (i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
          order = false;
          break;
        }
      }
      if (!order) {
        document.getElementById("outOrder").textContent = "Atenção... Números não estão em ordem crescente"
      } else {
        document.getElementById("outOrder").textContent = "Números estão em ordem crescente"
      }
}
let btnVerify = document.getElementById("btnVerify");
btnVerify.addEventListener("click", order)

