
export {observe}
let observe = () => {
    // ! observer for the opacity part
    let Titre = document.querySelector(".TitreNav");
    let observerThe3 = new IntersectionObserver(
        (entries, observerThe3) => {
          entries.forEach((entry) => {
            entry.target.children;
            if (!entry.isIntersecting) {
              return;
            } else {
              Array.from(entry.target.children).forEach((haka) => {
                haka.classList.add("fader");
              });
              observerThe3.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      
      
    observerThe3.observe(document.querySelector(".section5"), observerThe3);
    
    
    // ! observer for navbar, in two sections here
    let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let caches = document.querySelectorAll(".img");
            if (!entry.isIntersecting) {
              caches[1].classList.remove("cache");
              caches[0].classList.add("cache");
            } else {
              caches[1].classList.add("cache");
              caches[0].classList.remove("cache");
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
      
      observer.observe(Titre);
      
      let observer2 = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {
            document.querySelector(".divNav").classList.add("fixed");
          } else {
            document.querySelector(".divNav").classList.remove("fixed");
          }
        },
        {
          threshold: 0.6,
        }
      );
      
      observer2.observe(document.querySelector("nav"));
}
