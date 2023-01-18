 
 const value = document.querySelector(".value");
 const Btns = document.querySelectorAll(".btn");
  
 let count = 0;

  Btns.forEach(btn => {
    btn.addEventListener("click", e => {
        let styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }else {
            count = 0;
        }

        if(count < 0) {
            value.style.color = "red";
        }
        else if(count > 0) {
            value.style.color = "green";
        }else {
            value.style.color = "#444";
        }

        value.textContent = count;
    })
  })
 
