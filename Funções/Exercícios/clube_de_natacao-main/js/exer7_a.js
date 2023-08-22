function swimmingClub() {
  let inName = document.getElementById("inName");
  let inAge = document.getElementById("inAge");
  let nameAthlete = inName.value;
  let ageAthlete = Number(inAge.value);

if (nameAthlete.indexOf(" ") == -1 || ageAthlete == "" || isNaN(ageAthlete)) {
  alert("Dados incorretos! Inclua nome, sobrenome e idade!");
  return;
}

  let returnTraces = traces(nameAthlete);
  let categorizeStudent = categorize(ageAthlete);

  document.getElementById("answer").textContent = `${nameAthlete}\n${returnTraces}\nCategoria: ${categorizeStudent}`;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", swimmingClub);

function traces(name) {
  let tracesText = "";
  for (let i = 0; i < name.length; i++) {
    name.charAt(i) !== " " ? tracesText += "-" : tracesText += name.charAt(i);
  }
  return tracesText;
}

function categorize(age) {
  let category;

  if (age <= 12) {
    category = "infantil";
  } else if (age > 12 && age < 18) {
    category = "Juvenil";
  } else {
    category = "Adulto";
  }
  return category;
}


