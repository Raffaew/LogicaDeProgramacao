document.getElementById("inName").focus()

function password () {
    let inName = document.getElementById("inName");
    let student = inName.value;

    let verify = verifyName(student);
    let lastName = fullName(student);
    let vowels = vowelsName(student);

    if(verify == false) {
        alert("Insira o nome completo");
        inName.focus();
        return;
    }
    
    vowels >= 10 ? vowels = vowels : vowels = "0" + vowels 
    
    document.getElementById("outPass").textContent = `Senha Inicial: ${lastName}${vowels}`

    function verifyName(name) {
        let nameIsFull;
        name.indexOf(" ") == -1 ? nameIsFull = false : nameIsFull = name;
        return nameIsFull 
    }

    function fullName (name) {
        let posLastName = name.lastIndexOf(" ");
        let lastName = name.slice(posLastName+1).toLowerCase();
        return lastName;
    }

    function vowelsName(name) {
        let countVowels = 0
        for(let i = 0; i < name.length; i++) {
            if(name.charAt(i) == "a" || name.charAt(i) == "e" || name.charAt(i) == "i" || name.charAt(i) == "o" || name.charAt(i) == "u" ) {
                countVowels++
            }
        }
        return countVowels
    }

}
let btn = document.getElementById("btn");
btn.addEventListener("click", password);