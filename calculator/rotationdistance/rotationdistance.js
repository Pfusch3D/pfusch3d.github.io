document.getElementById("berechnen").onclick = function(){
    var stepsAktuell = document.getElementById("stepsAktuell").value;
    var sollLaenge = document.getElementById("sollLaenge").value;
    var istLaenge = document.getElementById("istLaenge").value;

    stepsAktuell = parseFloat(stepsAktuell.toString().replace(",","."));
    sollLaenge = parseFloat(sollLaenge.toString().replace(",","."));
    istLaenge = parseFloat(istLaenge.toString().replace(",","."));

    var ergebnis = (stepsAktuell*istLaenge/sollLaenge).toFixed(3);
    document.getElementById("ergebnis").value = ergebnis;
}