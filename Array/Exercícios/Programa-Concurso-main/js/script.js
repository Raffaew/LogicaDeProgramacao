let candidate = [];

function contest() {
  let inName = document.getElementById("inName");
  let inHits = document.getElementById("inHits");
  let name = inName.value;
  let hits = Number(inHits.value);

  if (inName.value == "" || isNaN(inHits.value)) {
    alert("Preencha corretamente Candidato e Acertos");
    inName.value = "";
    inName.focus();
    inHits.value = "";
    return;
  }

  candidate.push({ candidate: name, score: hits });
  inName.value = "";
  inHits.value = "";
  inName.focus();

  listAll();
}
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", contest);

function listAll() {
  if (candidate.length == 0) {
    alert("Não há canditados adcionados");
    return;
  }
  let outCandidate = "";
  for (let i = 0; i < candidate.length; i++) {
    outCandidate += `${candidate[i].candidate} - ${candidate[i].score} acertos \n`;
  }
  document.getElementById("outList").textContent = outCandidate;
}
let btnListAll = document.getElementById("listAll");
btnListAll.addEventListener("click", listAll);

function approved() {
  if (candidate.length == 0) {
    document.getElementById("outList").textContent = "Não houve aprovados";
    return;
  }

  let score = prompt("Número de acertos para aprovação?");
  if (score == 0 || isNaN(score)) {
    alert("Tente novamente, insirindo uma nota válida");
    return;
  }

  let listApproved = "";
  let approveds = false;
  let orderApproved = candidate.slice();
  orderApproved.sort(function (a, b) {
    return a.score - b.score;
  });
  orderApproved.reverse();

  for (let i = 0; i < candidate.length; i++) {
    if (orderApproved[i].score >= score) {
      listApproved += `${orderApproved[i].candidate} - ${orderApproved[i].score} acertos \n`;
      approveds = true;
    }
  }
  document.getElementById("outList").textContent = listApproved;
  if (!approveds) {
    document.getElementById("outList").textContent = "Não houve aprovados";
  }
}
let btnApproved = document.getElementById("btnApproved");
btnApproved.addEventListener("click", approved);
