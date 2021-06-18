export { laFunc, laFunc2 };

// ! Création de tout le formulaire en JS
let laFunc = () => {
  let section = document.body.appendChild(document.createElement("section"));
  section.classList.add("noblur");

  let arr = document.body.children;

  // ? Blur et noblur, pour un background spécifique, j'ai mis un filter blur et une box-shadow de grande taille, je sais qu'un wrapper aurait probablement été plus Opti , mais j'ai commit sur ma décision, avec réussite et apprentissage.
  Array.from(arr).forEach((element) => {
    if (element.classList.contains("noblur")) {
    } else {
      element.classList.add("blur");
    }
  });

  section.style = "display:flex; flex-direction: column; align-items: center;";
  section.classList.add("Connex");

  let myDiv1 = section.appendChild(document.createElement("div"));
  myDiv1.style =
    "display: flex; justify-content: space-between; width: 90%; align-items: center";

    let myH1 = myDiv1.appendChild(document.createElement("h1"));
    myH1.classList.add('clero')
  myH1.style =
    " background-image : url(./public/img/logo.png); width: 14.5rem; height: 2.75rem";
  let myButton = myDiv1.appendChild(document.createElement("button"));
  myButton.style =
    "height : 2rem; width: 2rem; font-size: 1.25rem;   box-sizing: border-content; border: none; opacity: 0.75";
  myButton.classList.add("bouttoneux");
  myButton.textContent = "X";

  myButton.addEventListener("click", () => {
    Array.from(arr).forEach((element) => {
      if (element.classList.contains("noblur")) {
        element.classList.remove("noblur");
      } else {
        element.classList.remove("blur");
      }
    });
    section.remove();
  });

  let myDiv2 = section.appendChild(document.createElement("div"));

  let myButton1 = myDiv2.appendChild(document.createElement("button"));
  let myButton2 = myDiv2.appendChild(document.createElement("button"));
  myButton1.style =
    "width : 4.7rem; height: 2.1rem; border: none; margin: 0.5rem; border-radius: 0.2rem";
  myButton1.textContent = "Connexion";
  myButton1.className = "bouttoneux listen";
  myButton2.style =
    "width : 4.7rem; height: 2.1rem; border: none; margin: 0.5rem; border-radius: 0.2rem";
  myButton2.className = "bouttoneux listen";
  myButton2.textContent = "Inscription";

  let myDiv3 = section.appendChild(document.createElement("div"));
  myDiv3.style = "width: 80%";
  let myH3 = myDiv3.appendChild(document.createElement("h3"));
  myH3.style = "font-weight: lighter";
  myH3.textContent = "Email Address";
  let myInput = myDiv3.appendChild(document.createElement("input"));
  myInput.setAttribute("placeholder", "abcdef@gmail.com");
  myInput.style = "width: 100%;height : 1.5rem; font-size: 1.25rem";
  let myP = myDiv3.appendChild(document.createElement("p"));
  myP.textContent = "We'll never share your email with anyone else";
  let myH31 = myDiv3.appendChild(document.createElement("h3"));
  myH31.style = "font-weight: lighter";
  myH31.textContent = "Password";
  let myInput1 = myDiv3.appendChild(document.createElement("input"));
  myInput1.style = "width: 100%; height : 1.5rem; font-size: 1.25rem";
  myInput1.setAttribute("type", "password");
  myInput1.setAttribute("placeholder", "*******");

  let myDiv4 = myDiv3.appendChild(document.createElement("div"));
  myDiv4.classList.add("laDiv4");
  myDiv4.style = "padding-bottom: 1rem; padding-top: 1rem;";

  let myInput2 = myDiv4.appendChild(document.createElement("input"));
  myInput2.setAttribute("type", "checkbox");
  myInput2.style = "";
  let myLabel = myDiv4.appendChild(document.createElement("label"));
  myLabel.textContent = "Check me out";
  myLabel.classList.add("label");
  myLabel.style = "font-weight: lighter";
  let myDivHomme = myDiv4.appendChild(document.createElement("div"));
  myDivHomme.classList.add("hide");
  let myInput3 = document.createElement("input");
  console.log(myDiv4);
  myDivHomme.appendChild(myInput3);
  myInput3.setAttribute("type", "checkbox");
  myInput3.style = "";
  let myLabel1 = myDivHomme.appendChild(document.createElement("label"));
  myLabel1.style = "width: 100%";
  myLabel1.textContent = "Homme";
  myLabel1.style = "font-weight: lighter";
  let mySubmit = myDiv3.appendChild(document.createElement("button"));
  mySubmit.textContent = "Submit";
  mySubmit.style =
    "background-color: #2576d3; color: white; border: none; padding: 0.3rem; border-radius: 0.2rem; width: 3.7rem; height: 2rem";
  mySubmit.classList.add("mySubmit");

  let myDiv5 = section.appendChild(document.createElement("div"));
  myDiv5.style = "width: 60%; height: 4.5rem; text-align: center";
  for (let i = 0; i < 4; i++) {
    let myI = myDiv5.appendChild(document.createElement("i"));
  }
  myDiv5.children[0].className = "fa fab fa-facebook-f";
  myDiv5.children[0].style =
    "color:  #2576d3;font-size: 2.5rem; margin: 0.15rem";
  myDiv5.children[1].className = "fa fab fa-instagram";
  myDiv5.children[1].style =
    "font-size: 2.5rem; color: black; opacity: 0.5;margin: 0.15rem";
    myDiv5.children[2].className = "fa fab fa-snapchat-ghost"
    // "fa fab fa-snapchat-ghost";
  myDiv5.children[2].style = "font-size: 2.5rem; color:#F7F401;margin: 0.15rem";
  myDiv5.children[3].className = "fa fa-laptop";
  myDiv5.children[3].style =
    "font-size: 2.5rem; color: black; opacity: 0.85;margin: 0.2rem";
};

// ! Appel de la fonction, avec petits changements adéquats
let laFunc2 = () => {
  let connex = document.querySelector(".btnConnexion");
  connex.addEventListener("click", () => {

    laFunc();
      

    let listener = document.querySelectorAll(".listen");
    listener[0].addEventListener("click", (e) => {
      let hider = document.querySelector(".laDiv4").lastElementChild;
      hider.classList.add("hide");
      let sub = document.querySelector(".mySubmit");
      sub.style =
        "background-color: #2576d3; color: white; border: none; padding: 0.3rem; border-radius: 0.2rem; width: 3.7rem; height: 2rem";
      sub.textContent = "Submit";
      let lab = document.querySelector(".label");
      lab.innerText = "Check me out";
    });
      
      
    listener[1].addEventListener("click", (e) => {
      let hider = document.querySelector(".hide");
      hider.classList.remove("hide");
      let lab = document.querySelector(".label");
      lab.innerText = "femme";
      let sub = document.querySelector(".mySubmit");
      sub.style =
        "margin-left: 42.5%; background-color: #2576d3; color: white; border: none; padding: 0.3rem; border-radius: 0.2rem; width: 5.2rem;margin-bottom: 0.5rem; height: 2rem;";
      sub.textContent = "Inscription";
    });
  });
};
