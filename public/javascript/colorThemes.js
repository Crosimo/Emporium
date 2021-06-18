export {colorThemes}
let colorThemes = () => {
    document.querySelector(".colori2").addEventListener("click", () => {
        document.querySelector(".divNav").style.backgroundColor = "black";
        Array.from(document.querySelectorAll('.c')).forEach((elem) => {
            elem.style.color = "white"
        })
        document.body.style.backgroundColor ="black"
        let images = document.querySelectorAll(".img");
        Array.from(images).forEach((a, i) => {
          if (i == 2) {
          } else {
            a.src = "./public/img/logoBlanc.png";
          }
        });
      });
      
      document.querySelector(".colori1").addEventListener("click", () => {
        document.querySelector(".divNav").style.backgroundColor = "white";
        Array.from(document.querySelectorAll('.c')).forEach((elem) => {
            elem.style.color = "black"
        })
        document.body.style.backgroundColor ="transparent"
        let images = document.querySelectorAll(".img");
        Array.from(images).forEach((a, i) => {
          a.src = "./public/img/logo.png";
        });
        let normal = Array.from(document.querySelectorAll(".normal"));
        normal.forEach((java) => {
          java.style.color = "black";
        });
      });
      
}
