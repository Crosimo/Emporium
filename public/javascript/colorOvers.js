export {laFoncColor}

let laFoncColor = () => {
    let galerie = document.querySelector(".wrapper").children;

Array.from(galerie).forEach((element) => {
    
    // ! mouseOver
  element.addEventListener("mouseover", (e) => {
    let bouts = element.querySelector(".bouton");
    bouts.classList.add("class");
    element.firstElementChild.classList.add("scaler");
  });
    
     
    // ! mouseOut
  element.addEventListener("mouseout", (e) => {
    let bouts = element.querySelector(".bouton");
    bouts.classList.remove("class");
    element.firstElementChild.classList.remove("scaler");
  });
});

}
