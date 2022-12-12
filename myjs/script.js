var hidden = document.getElementById("hidden");
var button = document.getElementById("button");
var button2 = document.getElementById("button2")
button.onclick = function(){
    if(hidden.className == "open"){
        hidden.className=""
    } else {
        hidden.className="open"
    }
}
button2.onclick = function(){
    if(hidden.className == "open"){
        hidden.className=""
    }
}