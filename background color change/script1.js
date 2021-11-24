function rbc() {
    var x = Math.floor(Math.random() * 560);
    var y = Math.floor(Math.random() * 560);
    var z = Math.floor(Math.random() * 560);
    var bgc = "rgb(" + x + "," + y + "," + z + ")";
    document.write(bgc);
    document.body.style.background = bgc;
}
rbc();
