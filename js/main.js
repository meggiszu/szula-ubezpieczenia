
document.addEventListener("DOMContentLoaded", function(e) {
	
	const navButtons = document.querySelectorAll(".menu span")

	navButtons.forEach(function(button){
    const id = button.getAttribute("data-name")

		button.addEventListener('click', function() {
			document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth',
        block: "start"
      })

		})
	})


    const button = document.querySelector("#moa");
    const moaMenu = document.querySelector("#moa-menu");

    button.addEventListener("click", function() {
      if (moaMenu.className === "menu sticky") {
        moaMenu.className += " responsive";
      } else {
      	moaMenu.className = "menu sticky";
      }

    })

})

