function darkTheme(){
    var bar = document.getElementById("sliderid");
    document.body.classList.toggle("dark-mode");
    if(bar.checked == false){
        if(document.body.classList.contains("dark-mode")){
            bar.style.background = "#313232";
            localStorage.setItem("theme", "dark");
            document.getElementById("lightid").style.visibility = "visible";
            document.getElementById("darkid").style.visibility = "hidden";
            console.log("dark")
        }
        else{
            bar.style.background = "#c0c0c0";
            localStorage.setItem("theme", "light");
            document.getElementById("lightid").style.visibility = "hidden";
            document.getElementById("darkid").style.visibility = "visible";
            console.log("light")
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
        darkTheme()
    }
})