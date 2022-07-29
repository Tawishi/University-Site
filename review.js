var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

function setActive(item) {
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
    }
    item.classList.add("active");
}

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    setActive(this);
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)";
    setActive(this);
}
btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)";
    setActive(this);
}
btn[3].onclick = function() {
    slide.style.transform = "translateX(-2400px)";
    setActive(this);
}