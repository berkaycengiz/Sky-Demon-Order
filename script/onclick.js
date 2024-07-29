function onClick() {
    var checkBox = document.getElementById("sliderid");
    var text2 = document.getElementById("text2");
    var text1 = document.getElementById("text1");
    let color = "#c0c0c0";
    if(document.body.classList.contains("dark-mode")){
        color = "#313232";
    }
    else{
        color = "#c0c0c0";
    }

    if (checkBox.checked == true){
        text2.style.display = "block";
        text1.style.display = "none";
        checkBox.style.background = "#f65252";
    }

    else {
        text2.style.display = "none";
        text1.style.display = "block";
        checkBox.style.background = color;
    }
  }