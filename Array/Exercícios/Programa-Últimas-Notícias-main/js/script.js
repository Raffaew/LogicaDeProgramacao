let news = document.getElementById("inText");
let btnAdd = document.getElementById("btnAdd");
let btnNews = document.getElementById("btnLastNews");
let outNum = document.getElementById("outNum");
let outAnswer = document.getElementById("outAnswer");

let newsArray = [];
function newsAdd () {
    if(news.value == "") {
        alert("inclua uma notícia para ser cadastrada");
        return;
    }

    let inNews = news.value;
    newsArray.push(inNews);
    outNum.textContent = newsArray.length;
    news.value = "";
    news.focus();
}
btnAdd.addEventListener("click", newsAdd)

function lastNews () {
    let newsNum = prompt("Quantas notícias deseja exibir?");
    text = `${newsNum} Última(s) Notícias\n------------------------------------------------------\n`;

    for (let i = newsArray.length - 1; i >= newsArray.length  - newsNum; i --) {
        text += `${i+1}º) ${newsArray[i]} \n`;
    }
    outAnswer.textContent = text;
    
}
btnNews.addEventListener("click", lastNews);
