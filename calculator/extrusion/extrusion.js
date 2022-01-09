document.getElementById("berechnen").onclick = function(){
    var laengeVorher = document.getElementById("laengeVorher").value;
    var laengeAktuell = document.getElementById("laengeAktuell").value;


    laengeVorher = parseFloat(laengeVorher.toString().replace(",","."));
    laengeAktuell = parseFloat(laengeAktuell.toString().replace(",","."));


    var ergebnis = (laengeVorher-laengeAktuell).toFixed(2);
    document.getElementById("ergebnis").value = ergebnis;
}