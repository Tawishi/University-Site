var colls = document.getElementsByClassName("collapsible");
var dolls = document.getElementsByClassName("collapsible");

function closeAll() {
    for (var dol of dolls) {
        dol.classList.remove("active");
        dol.nextElementSibling.style.maxHeight = null;
    }
}

for (var col of colls) {
    col.addEventListener("click", function () {

        var content = this.nextElementSibling;

        if (this.classList.contains("active")) {
            closeAll();
            content.style.maxHeight = 0;
        } else {
            closeAll();
            this.classList.toggle("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}