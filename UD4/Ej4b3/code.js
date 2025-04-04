
function camelizar(s){
  return s.split("-").map( (e,i)=>{
    if(i==0)return e.toLowerCase();
    return e[0].toUpperCase()+e.slice(1).toLowerCase();
  }).join("");
}

const sol = document.querySelector("#sol");
sol.innerHTML = camelizar("En-un-lugar-de-la-Mancha");