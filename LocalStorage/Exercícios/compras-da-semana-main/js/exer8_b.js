var inProduct = document.getElementById("inProduct");

function addProducts() {
  let product = inProduct.value;

  if(inProduct.value == "") {
    alert("Insira um produto!");
    return;
  }

  if (localStorage.getItem("listProducts")) {
    let listProducts = localStorage.getItem("listProducts") + ";" + product;
    localStorage.setItem("listProducts", listProducts);
  } else {
    localStorage.setItem("listProducts", product);
  }
  viewProduct();
  inProduct.value = "";
}

function viewProduct() {
  if (localStorage.getItem("listProducts")) {
    let products = localStorage.getItem("listProducts").split(";");
    products.sort(function (a, b) {
      return a.localeCompare(b);
    });

    let text = `Produtos Adcionados \n ---------------------`;

    for (let i = 0; i < products.length; i++) {
      text += "\n" + products[i];
    }
    document.getElementById("outText").textContent = text;
  }
}

viewProduct();

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", addProducts);
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addProducts();
  }
});

function deleteProducts() {
  if(!localStorage.getItem("listProducts")) {
    alert("Sua lista está vazia!");
    return;
  }
  if (confirm("Deseja limpar a lista de produtos?")) {
    localStorage.removeItem("listProducts");
    document.getElementById("outText").textContent = "";
    inProduct.value = "";
    inProduct.focus();
  }
}
let btnClean = document.getElementById("btnClean");
btnClean.addEventListener("click", deleteProducts);
