"use strict";
function NamenHinzufügen(){
    var classname = document.getElementById("klassenname").value
    document.getElementById("kinder").value += localStorage.getItem(classname)
}

function speichern(){
    localStorage.setItem(document.getElementById("klassenname").value, String(document.getElementById("kinder").value))
}

function gruppenGenerieren(){
    //Daten holen
    var klasse = document.getElementById("klassenname").value
    var kinderpro = document.getElementById("kinder").value
    var kinder = localStorage.getItem(klasse).split("\n")
    var gruppen = ""
    var i = kinderpro
    var j = kinder.length / kinderpro
    while (j > 0){
        while (i > 0){
            var index = Math.floor(Math.random() * kinder.length)
            gruppen += kinder[index]
            gruppen += " "
            kinder.splice(index, 1)
            i--
        }
        i = kinderpro
        gruppen += "/"
        j--
    }
    window.alert(gruppen)
}