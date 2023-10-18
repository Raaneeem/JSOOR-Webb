const forgetPass = document.getElementById("forgetPass");
const slideItem = document.getElementById("slide-item");
const closeButton = document.getElementsByClassName("close")[0];


forgetPass.addEventListener("click", function(){
    slideItem.style.display = "block";
});
closeButton.addEventListener("click", function () {
    slideItem.style.display = "none";
});