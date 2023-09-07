let inService = document.getElementById("inService");
let pendingServices = document.getElementById("outServices");
let btnAdd = document.getElementById("btnAdd");
let btnExec = document.getElementById("btnExec");

function addServices() {
  if (inService.value == "") {
    alert("Insira um serviço!");
    return;
  }

  let servicesName = inService.value;

  if (localStorage.getItem("services")) {
    let servicesList = localStorage.getItem("services") + ";" + servicesName;
    localStorage.setItem("services", servicesList);
  } else {
    localStorage.setItem("services", servicesName);
  }
  // Se existir dados no localStorage, irá atribuir + ";" + servicesName(input), e salvar os dados!
  // Senão criaremos a chave "services" com o valor recebido em servicesName(input).
  let servicesList = localStorage.getItem("services").split(";");
  // O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array, pois o retorno do método getItem retorna apenas strings, e queremos manipula-los em seguida.
  outServices.textContent = servicesList.length;
  // (outServices) Span criado no html para contar os serviços pendentes.
  inService.value = "";
  inService.focus();
}
btnAdd.addEventListener("click", addServices);
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addServices();
  }
});

function runService() {
  if (!localStorage.getItem("services")) {
    alert("Não há serviços pendentes!");
    outRun.textContent = "";
    return;
  }
  var servicesList = localStorage.getItem("services").split(";");
  var run = servicesList.shift();
  var servicesName = servicesList.join(";");

  // Repetimos novamente o método split(), pois os valores no localStorage são retornado em string.
  // Retiramos o primeiro item desse array, e imprimimos na tela, para exibir o nome do serviço em execução.
  // Método join() usado novamente e separados por ";" para transformar o array em uma string e salvar no localStorage novamente.

  localStorage.setItem("services", servicesName); // Salva os dados.

  outServices.textContent = servicesList.length;
  outRun.textContent = run;
}
btnExec.addEventListener("click", runService);

function reload() {
  if (localStorage.getItem("services")) {
    var servicesList = localStorage.getItem("services").split(";");
    outServices.textContent = servicesList.length;
  }
}
reload();
// Caso a página recarregue ou feche o navegador, recupera-se os serviços pendentes.
