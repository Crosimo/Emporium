export {laFoncCarrou}
let laFoncCarrou = () => {
    let bouttonsCarrou = document.querySelectorAll(".indic1");
console.log(bouttonsCarrou);
let elemCarrousel = document.querySelector(".carrou").querySelectorAll(".div1");
let numba;
let arrivo = [];
 // ! positionnement des images grâce à transform, utilisation de numba et arrivo pour garder les valeurs   
Array.from(elemCarrousel).forEach((elementaire, y) => {
  numba = y * 25;
  arrivo.push(numba);
  elementaire.style = `transform: translateX(${numba}%);`;
});
Array.from(bouttonsCarrou).forEach((element, i) => {
  element.addEventListener("click", (e) => {
    console.log(arrivo);
    if (element == bouttonsCarrou[0]) {
      Array.from(elemCarrousel).forEach((elementaire, y) => {
        if (
          document.querySelector(".poslast").style.transform ==
          "translateX(-300%)"
        ) {
        } else {
          console.log(document.querySelector(".poslast").style.transform);
          numba = arrivo[y] - 125;
          arrivo[y] = numba;

          elementaire.setAttribute(
            "style",
            `transform: translateX(${numba}%);`
          );
        }
      });
    } else if (element == bouttonsCarrou[1]) {
      Array.from(elemCarrousel).forEach((elementaire, y) => {
        if (
          document.querySelector(".poslast").style.transform ==
            "translateX(-175%)" ||
          document.querySelector(".poslast").style.transform ==
            "translateX(-300%)"
        ) {
          console.log(document.querySelector(".poslast").style.transform);
        } else {
          numba = arrivo[y] - 250;
          arrivo[y] = numba;

          elementaire.setAttribute(
            "style",
            `transform: translateX(${numba}%);`
          );
        }
      });
    } else if (element == bouttonsCarrou[2]) {
      Array.from(elemCarrousel).forEach((elementaire, y) => {
        if (
          document.querySelector(".poslast").style.transform ==
            "translateX(75%)" ||
          document.querySelector(".poslast").style.transform ==
            "translateX(200%)"
        ) {
        } else {
          numba = arrivo[y] + 250;
          arrivo[y] = numba;

          elementaire.setAttribute(
            "style",
            `transform: translateX(${numba}%);`
          );
        }
      });
    } else if (element == bouttonsCarrou[3]) {
      Array.from(elemCarrousel).forEach((elementaire, y) => {
        if (
          document.querySelector(".poslast").style.transform ==
          "translateX(200%)"
        ) {
        } else {
          numba = arrivo[y] + 125;
          arrivo[y] = numba;
          elementaire.setAttribute(
            "style",
            `transform: translateX(${numba}%);`
          );
        }
      });
    }
  });
});

}
