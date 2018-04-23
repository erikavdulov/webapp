

const key = "551f9a4dc0550818cff66f9e8756a7485b4361b9";
//note: callback should be in global scope
function getData(s) {

}
window.onload = runThis;




function runThis() {

const submit = document.getElementById('submit');
const search = document.getElementById('search');
submit.addEventListener('click', clickThis);

function clickThis() {
let ans = search.value;
const jsonpScript = document.createElement('script');
jsonpScript.src = `https://www.giantbomb.com/api/search/?api_key=${key}&format=jsonp&json_callback=getData&query=${ans}&resources=game`;
document.head.appendChild(jsonpScript);
}

}
