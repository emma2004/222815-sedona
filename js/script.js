
      var link = document.querySelector(".buy-search");
      var popup = document.querySelector(".buy-order");
      
      
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.toggle("buy-order-show");
      });
          
