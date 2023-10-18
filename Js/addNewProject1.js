const projectName = document.getElementById("projectName");
const nameProject = document.getElementById("nameProject");
const targetIn = document.getElementById("targetIn");
const targetOut = document.getElementById("targetOut");
const categoryIn = document.getElementById("categoryIn");
const categoryOut = document.getElementById("categoryOut");
const nextBtn = document.getElementById("nextBtn");


projectName.addEventListener("input", function(){
    const newText = projectName.value;

    nameProject.textContent = newText;
});

targetIn.addEventListener("input", function(){
    const newText = targetIn.value;
   
    targetOut.textContent = newText;
});

categoryIn.addEventListener("input", function(){
    const newText = categoryIn.value;
   
    categoryOut.textContent = newText;
});

nextBtn.addEventListener("click", function(){
    const name = projectName.value;
    const target = targetIn.value;
    const category = categoryIn.value;
    localStorage.setItem("outputname", name);
    localStorage.setItem("outputtarget", target);
    localStorage.setItem("outputcategory", category);

    window.location.href = "addNewProjectPart2.html";
});