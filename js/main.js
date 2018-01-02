document.addEventListener("DOMContentLoaded", function(e) {
	
	const navButtons = document.querySelectorAll(".menu span")

	navButtons.forEach(function(button){
    const id = button.getAttribute("data-name")

		button.addEventListener('click', function() {
			document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth',
        block: "start"
      });#menu

		})
	})


    function myFunction() {
	  const x = querrySelector("#menu sticky");
	    if (x.className === "#menu sticky") {
		  x.className += " responsive";
	    } else {
		  x.className = "#menu sticky";
	    }
     }

})

