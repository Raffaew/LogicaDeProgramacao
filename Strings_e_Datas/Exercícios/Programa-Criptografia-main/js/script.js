let original = [];

function criptografar() {
  let inText = document.getElementById("text");
  let text = inText.value;
  let firstText = text;
  original.push(firstText);
  let par = ""
  let impar = ""
  let result = ""
  
  
  for (let i = 0; i <= firstText.length; i++) {
    if(i % 2 == 0) {
        par += firstText.charAt(i)
        
    } else {
        impar += firstText.charAt(i)
    }
  }
  result = impar + par;
  inText.value = result
  document.getElementById("out").textContent = result;

}
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", criptografar);

function decriptografar () {
    document.getElementById("out").textContent = original[0]
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", decriptografar)
