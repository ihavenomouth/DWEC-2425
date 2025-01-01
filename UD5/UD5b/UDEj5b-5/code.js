"use strict";


const divEditable = document.querySelector("#divEditable");

document.addEventListener("keydown", e=>{
  if(e.ctrlKey && (e.key =="b" || e.key =="i" || e.key =="+" || e.key =="-")){
    e.preventDefault();
  }
  // console.log("Document: " +e.key)
}, true);


divEditable.addEventListener("keydown", e=>{  
  // console.log("División: " +e.key)
  if(e.ctrlKey && e.key =="b"){
    if(!divEditable.style.fontWeight)
      divEditable.style.fontWeight="bold";
    else
      divEditable.style.fontWeight="";
  }
  else if(e.ctrlKey && e.key =="i"){
    if(!divEditable.style.fontStyle)
      divEditable.style.fontStyle="italic";
    else
      divEditable.style.fontStyle="";
  }
  else if(e.ctrlKey && e.key =="+"){
    if(divEditable.style.fontSize=="small")
      divEditable.style.fontSize="";
    else if(divEditable.style.fontSize=="")
      divEditable.style.fontSize="larger";
  }
  else if(e.ctrlKey && e.key =="-"){
    if(divEditable.style.fontSize=="larger")
      divEditable.style.fontSize="";
    else if(divEditable.style.fontSize=="")
      divEditable.style.fontSize="small";
  }
});