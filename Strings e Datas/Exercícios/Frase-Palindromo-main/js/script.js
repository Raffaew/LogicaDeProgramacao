;function palindrome () {
    let text = document.getElementById("inText");
    let inText = text.value;
    let outAnswer = document.getElementById("outAnswer");
    let comparison1 = "";
    let comparison2 = "";
    
    if(text.value == "") {
        alert("Insira uma frase para verificar");
        text.value = "";
        text.focus();
        return;
    }

    comparison1 = inText.replace(/[\W|]/g, "", " ", "").toLowerCase();
    
    for(let i = comparison1.length; i >= 0; i--) {
        comparison2 += comparison1.charAt(i).toLowerCase();
    }

    comparison1 == comparison2 ? outAnswer.textContent = inText.toUpperCase() + " é um Palindromo" : outAnswer.textContent = inText.toUpperCase() + " não é um Palindromo";
}
    let btn = document.getElementById("btn");
    btn.addEventListener("click", palindrome);