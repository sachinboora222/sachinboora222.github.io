// for mobile navigation menu
function mobList() {
    var x = document.querySelector(".navigation__list");
    var nav = document.querySelector(".navigation");
    var navNav = document.querySelector(".navigation__nav");
    var navIcon = document.querySelector(".navigation__icon");
    var navIconI = document.querySelector(".navigation__icon .fa");

    if (x.style.display === "flex") {
        navIconI.classList.remove("fa-times");
        navIconI.classList.add("fa-bars");
        navIcon.style.marginLeft = "0rem";

        nav.style.width = "8rem";
        x.style.display = "none";


        if (screen.width < 900) {
            nav.style.backgroundColor = "transparent";
            nav.style.right = "-1.2rem";
            nav.style.top = "1rem";
        }

        if (screen.width < 600) {
            navIcon.style.transform = "translateY(-3rem)";
        }
    } else {
        navIconI.classList.remove("fa-bars");
        navIconI.classList.add("fa-times");
        navIcon.style.marginLeft = "5rem";

        if (screen.width > 1200) {
            nav.style.width = "50%";
        }
        else if (screen.width < 1200 && screen.width > 900)
            nav.style.width = "70%";
        else {
            nav.style.right = "0rem";
            nav.style.top = "0rem";
            navNav.style.padding = "1rem";
            nav.style.width = "25%";
            nav.style.backgroundColor = "#4b7bec";
            nav.style.borderRadius = "0px";
            nav.style.margin = "0px";

            if (screen.width < 900) {
                nav.style.width = "35%";
                nav.style.height = "100%";
            }
        }

        x.style.display = "flex";
        x.style.justifyContent = "space-between";
        x.style.alignItmes = "center";
    }
}


/** MODAL */
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

document.getElementById("14").onclick = function(){
    modalImg.src = "../img/brochure/tech/5_BC_1.png";
    modal.style.display = "block";
    captionText.innerHTML = "Infosys bootcamp";
}

document.getElementById("1").onclick = function(){
    modalImg.src = "../img/brochure/tech/ep.png";
    modal.style.display = "block";
    captionText.innerHTML = "Elevator pitch";
}

document.getElementById("2").onclick = function(){
    modalImg.src = "../img/brochure/tech/gd.png";
    modal.style.display = "block";
    captionText.innerHTML = "Graphic Designing";
}

document.getElementById("3").onclick = function(){
    modalImg.src = "../img/brochure/tech/hack.png";
    modal.style.display = "block";
    captionText.innerHTML = "Hackathon";
}

document.getElementById("4").onclick = function(){
    modalImg.src = "../img/brochure/tech/IOT.png";
    modal.style.display = "block";
    captionText.innerHTML = "Internet of things";
}

document.getElementById("5").onclick = function(){
    modalImg.src = "../img/brochure/tech/itquiz.png";
    modal.style.display = "block";
    captionText.innerHTML = "IT Quiz";
}

document.getElementById("6").onclick = function(){
    modalImg.src = "../img/brochure/tech/tagcoding.png";
    modal.style.display = "block";
    captionText.innerHTML = "Tag Coding";
}

document.getElementById("7").onclick = function(){
    modalImg.src = "../img/brochure/tech/wd.png";
    modal.style.display = "block";
    captionText.innerHTML = "Web Designing";
}

document.getElementById("8").onclick = function(){
    modalImg.src = "../img/brochure/non_tech/btm.png";
    modal.style.display = "block";
    captionText.innerHTML = "Best IT Manager";
}

document.getElementById("9").onclick = function(){
    modalImg.src = "../img/brochure/non_tech/event.png";
    modal.style.display = "block";
    captionText.innerHTML = "Event X";
}

document.getElementById("10").onclick = function(){
    modalImg.src = "../img/brochure/non_tech/gaming.png";
    modal.style.display = "block";
    captionText.innerHTML = "Gaming";
}

document.getElementById("11").onclick = function(){
    modalImg.src = "../img/brochure/non_tech/mun.png";
    modal.style.display = "block";
    captionText.innerHTML = "MUN";
}

document.getElementById("12").onclick = function(){
    modalImg.src = "../img/brochure/non_tech/pv.png";
    modal.style.display = "block";
    captionText.innerHTML = "Photo & Videography";
}

document.getElementById("13").onclick = function(){
    modalImg.src = "../img/brochure/non_tech/th.png";
    modal.style.display = "block";
    captionText.innerHTML = "Photo & Videography";
}

