let accordionHead = document.querySelectorAll('.accordion__head');

function toggleFunction(el) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function (event) {
       event.target.classList.toggle("accordion__head--on");
      });
  
    }
  }
  
  toggleFunction(accordionHead);