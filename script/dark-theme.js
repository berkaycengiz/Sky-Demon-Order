function darkTheme(){
    var bar = document.getElementById("sliderid");
    document.body.classList.toggle("dark-mode");
    if(bar.checked == false){
        if(document.body.classList.contains("dark-mode")){
            bar.style.background = "#313232";
        }
        else{
            bar.style.background = "#c0c0c0";
        }
    }
}