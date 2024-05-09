console.log("hello the script is working")

var btnTranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")
var outputdiv = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL (input) {
  return serverURL + "?" + input
}

function errorHandler (error){
   console.log("error occured",error)
   alert("Something went wrong with server try after sometime!!")
}

function clickHandler(){
  var inputText = txtinput.value;

  //call server
  fetch(getTranslateURL(inputText))
  .then(response => response.json()).then(json => {
    var TranslatedText = json.content.translated;

    outputdiv.innerHTML = TranslatedText
  })
  .catch(errorHandler)
};

btnTranslate.addEventListener('click', clickHandler)


// btnTranslate.addEventListener('click',function clickbtn(){
//   console.log("you clicked button")
// })
