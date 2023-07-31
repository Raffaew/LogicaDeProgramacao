function repeatFruit () {
    let fruit = document.getElementById('fruit');
    let number = document.getElementById('num');
    
    let answer = document.getElementById('answer')

    let nameFruit = fruit.value;
    let num = Number(number.value);

    let fruits = "";

    for(let i = 1; i < num; i++) {
        fruits+= nameFruit + "*" 
        answer.textContent = fruits + nameFruit
    }
}

let btn = document.getElementById('btn');
btn.addEventListener('click', repeatFruit)
