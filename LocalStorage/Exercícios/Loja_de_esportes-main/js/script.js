let text = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.";
let p = document.getElementById("p");

function welcome() {
  if (!localStorage.getItem("count")) {
    p.textContent = text;
    localStorage.setItem("count", 2);
  } else {
    let count = Number(localStorage.getItem("count"));
    text = `Muito Bem-Vindo! Esta é a sua ${count}ª visita ao nosso site.`;
    p.textContent = text;
    count++;
    localStorage.setItem("count", count);
  }
}
welcome();

var inputsRadio = document.getElementsByTagName("input");
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocarClube);
}

function trocarClube() {
  var imgClube = document.getElementById("imgClube");
  var divTitulo = document.getElementById("divTitulo");

  var clubes = ["Brasil", "Pelotas", "Farroupilha"];

  for (var i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) {
      var selecao = i;
      break;
    }
  }

  if (selecao <= 2) {
    divTitulo.className = "row cores" + clubes[selecao];
    imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
    imgClube.className = "exibe";
    imgClube.alt = "Símbolo do " + clubes[selecao];
    localStorage.setItem("clube", clubes[selecao]);
  } else {
    divTitulo.className = "row";
    imgClube.className = "oculta";
    imgClube.alt = "";
    localStorage.removeItem("clube");
  }
}

function verificarClube() {
  if (localStorage.getItem("clube")) {
    var clube = localStorage.getItem("clube");
    if (clube == "Brasil") {
      inputsRadio[0].checked = true;
    } else if (clube == "Pelotas") {
      inputsRadio[1].checked = true;
    } else {
      inputsRadio[2].checked = true;
    }

    trocarClube();
  }
}
verificarClube();
