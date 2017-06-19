console.log(document.getElementsByClassName("front-card"));
document.getElementsByClassName("front-card")[0].onclick = function(){
  this.className = "";
  this.className = "front-card animate";
}
