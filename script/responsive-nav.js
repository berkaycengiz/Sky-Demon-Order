function Checked(){
    var checkBox = document.getElementById("navtogglerid");
    var nav = document.getElementById("responsivenavid");

    if(checkBox.checked == true){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
}