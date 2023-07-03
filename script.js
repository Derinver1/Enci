const inicio=document.querySelector("#li1");
const cursos=document.querySelector("#li2");
const valores=document.querySelector("#li3");
const mision=document.querySelector("#li4");
const ubicacion=document.querySelector("#li5");
const contacto=document.querySelector("#li6");
inicio.addEventListener("click",(e)=>{
e.preventDefault();
window.scrollTo(0,0);
});
cursos.addEventListener("click",(e)=>{
e.preventDefault();
window.scrollTo(0,865);
});
valores.addEventListener("click",(e)=>{
e.preventDefault();
window.scrollTo(0,2244);
});
mision.addEventListener("click",(e)=>{
e.preventDefault();
window.scrollTo(0,3044);
});
ubicacion.addEventListener("click",(e)=>{
e.preventDefault();
window.scrollTo(0,3764);
});
contacto.addEventListener("click",(e)=>{
e.preventDefault();
window.scrollTo(0,4644);
});

