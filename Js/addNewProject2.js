const nameProject = document.getElementById("nameProject");
const targetOut = document.getElementById("targetOut");
const categoryOut = document.getElementById("categoryOut");

const Name = localStorage.getItem("outputname");
const target = localStorage.getItem("outputtarget");
const category = localStorage.getItem("outputcategory");

nameProject.textContent = Name;
targetOut.textContent = target;
categoryOut.textContent = category;

