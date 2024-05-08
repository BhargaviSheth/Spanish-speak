console.log("hello the script is working")

var btnTranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")

//console.log(txtinput)


btnTranslate.addEventListener('click',function clickbtn(){
  console.log("input" , txtinput.value)
  //console.log("you clicked button")
})
