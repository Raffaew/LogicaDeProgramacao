let news = document.getElementById("inText");
let btnAdd = document.getElementById("btnAdd");
let btnNews = document.getElementById("btnLastNews");
let outNum = document.getElementById("outNum");
let outAnswer = document.getElementById("outAnswer");

let newsArray = [];

function newsAdd () {
    let inNews = news.value;
    newsArray.push(inNews);
    //console.log(newsArray)
    outNum.textContent = newsArray.length;

}
btnAdd.addEventListener("click", newsAdd)

function lastNews () {
    let newsNum = prompt("Quantas notícias deseja exibir?");
    for (let i = news.length -1; i < newsArray.length; i --) {
        
    }
}
btnNews.addEventListener("click", lastNews);
