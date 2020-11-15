'use strict'

function showSubmenu() {
    document.getElementById("subMenu").classList.toggle("hide");
}

var xhttp =  new XMLHttpRequest();
xhttp.onreadystatechange =  function() {
    if (this.readyState == 4 && this.status == 200) {
        var xmlDoc= this.responseXML;
        var txt = "<ul>";
        var data = xmlDoc.getElementsByTagName("NAME");
        for(var i = 0; i < data.length; i++){
            txt = txt + "<li>" + data[i].childNodes[0].nodeValue + "</li>";
        }
        var txt = txt + "<ul>";
        document.getElementById("items").innerHTML = txt;
    }
  };
xhttp.open("GET", "http://127.0.0.1:80/itemList.xml", true);
xhttp.send();
