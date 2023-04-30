/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
  /* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Collapsible script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}