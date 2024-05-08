console.log("hello the script is working")

var btnTranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")
var outputdiv = document.querySelector('#output')



btnTranslate.addEventListener('click',function clickbtn(){
  console.log("you clicked button")
  outputdiv.innerHTML = "translated" + txtinput.value  
})
