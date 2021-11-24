var myVar= setInterval(rbc,3000)
function rbc() {
  const x:number = Math.floor(Math.random() * 560);
  const y:number = Math.floor(Math.random() * 560);
  const z:number = Math.floor(Math.random() * 560);
  const bgc:string = "rgb(" + x + "," + y + "," + z + ")";
  document.write(bgc);
  document.body.style.background = bgc;

}
rbc();
