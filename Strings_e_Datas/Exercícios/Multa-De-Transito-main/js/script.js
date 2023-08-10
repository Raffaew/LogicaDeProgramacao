function trafficTicket() {
  let inDate = document.getElementById("inDate");
  let inPrice = document.getElementById("inPrice");
  let date = inDate.value;
  let price = Number(inPrice.value);

  if(isNaN(price) || inPrice.value == "" || inDate.value == "") {
    alert("Informe o valor da multa e data da infração corretamente!");
    inPrice.value = "";
    inPrice.focus();
    return;
  }

  let outDate = new Date();
  let part = date.split("-");

  outDate.setDate(Number(part[2]));
  outDate.setMonth(Number(part[1]) -1);
  outDate.setFullYear(Number(part[0]));

  let limit = outDate.getDate();
  outDate.setDate(limit + 90);

  let day = outDate.getDate();
  let month = outDate.getMonth() + 1;
  let year = outDate.getFullYear();

  let day0 = day < 10 ? "0" + day : day;
  let month0 = month < 10 ? "0" + month : month;

  let sale = (price * 20) / 100;
  let saleResult = price - sale;

  document.getElementById("outDate").textContent = "Data limite para pagamento com desconto: " + day0 + "/" + month0 + "/" + year;
  document.getElementById("outPrice").textContent = "Valor da multa com desconto R$: " + saleResult.toFixed(2);
  
}
let btn = document.getElementById("btn");
btn.addEventListener("click", trafficTicket);
