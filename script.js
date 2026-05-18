
    // Smooth Scroll
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", function(){
            const target = document.querySelector(this.dataset.target);
            if(target){
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }

            // Active highlight
            document.querySelectorAll(".side-icon").forEach(i => i.classList.remove("active"));
            if(this.classList.contains("side-icon")){
                this.classList.add("active");
            }
        });
    });

     AOS.init({
    duration: 1000,  
    once: true,      
    offset: 120,     
  });
