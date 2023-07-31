let teams = [];

let inTeam = document.getElementById("inTeam");
let btnTeam = document.getElementById("btnTeam");
let btnTable = document.getElementById("btnTable");
let outList = document.getElementById("outList");

function knockoutGames() {
  if (inTeam.value == "") {
    alert("Insira um time");
    return;
  } 
    teams.push(inTeam.value);
    inTeam.value = "";
    inTeam.focus();
  
  listTeam();
}
let btnAdc = document.getElementById("btnAdc");
btnAdc.addEventListener("click", knockoutGames);

function listTeam() {
  list = "";
  for (let i = 0; i < teams.length; i++) {
    list += `${i + 1}. ${teams[i]} \n`;
    outList.textContent = list;
  }
  
}
btnTeam.addEventListener("click", listTeam);

function table() {
  list = "";
  let copy = teams.slice();
  let cont = teams.length / 2;
  if (teams.length % 2 !== 0) {
    alert("Impossível formar times, inclua mais um");
  } else {
    for (let i = 0; i < cont; i++) {
      list += `${copy.shift()} x ${copy.pop()} \n`;
      outList.textContent = list;
    }
  }
}

btnTable.addEventListener("click", table);
