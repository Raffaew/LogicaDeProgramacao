let chinchilas = document.getElementById('numChinchilas');
let years = document.getElementById('numYears');
let answer = document.getElementById('answer');
let btn = document.getElementById('btn');

function CreatChinchilas () {

    let nChinchilas = Number(chinchilas.value);
    let nYears = Number(years.value);

    let creationChinchilas = nChinchilas
    let yearsText = ""

    if (nChinchilas < 2 || isNaN(nChinchilas) || isNaN(nYears) || nYears == "") {
        alert("Informe corretamente o número de chinchilas e número de anos corretamente!!!");
        chinchilas.value = ""
        years.value = "";
        chinchilas.focus();
        return;

    }

    for (let i = 1; i <= nYears; i++) {
        yearsText += i + "º ano: "  + creationChinchilas + " Chinchilas" + "\n"
        creationChinchilas *= 3
       

    }
    answer.textContent = yearsText 
}

btn.addEventListener('click', CreatChinchilas);