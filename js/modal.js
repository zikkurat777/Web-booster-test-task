
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


function modalOpener () {
  modal.style.display = "block";
  const goodsId = "sk"+this.id;
  const goodsName = document.getElementById(goodsId).innerHTML
document.getElementById("goodsChosen").innerHTML += goodsName;
}

document.querySelectorAll('.buttonbuy').forEach(item => {
  item.addEventListener('click', modalOpener)
})


span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("goodsChosen").innerHTML = "Меня заинтересовал товар : ";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("goodsChosen").innerHTML = "Меня заинтересовал товар : ";
  }
} 