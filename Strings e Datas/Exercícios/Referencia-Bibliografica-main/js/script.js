function bibliography() {
  let text = document.getElementById("inText");
  let inText = text.value;
  let result = document.getElementById("outRef");

  let part = inText.split(" ");
  let quote = "";
  let lastName = part[part.length - 1] + ", ";

  if (part.length < 2 || text.value == "") {
    alert("Insira nome e sobrenome do autor!");
    text.value = "";
    text.focus();
    return;
  }

  for (let i = 0; i < part.length - 1; i++) {
    quote += part[i].charAt(0) + ". ";
  }
  result.textContent = "Citação Bibliográfica: " + (lastName + quote).toUpperCase();
}
let btn = document.getElementById("btn");
btn.addEventListener("click", bibliography);
