function encrypt() {
    // Get the textarea element by its id
    var inputTextarea = document.getElementById("textarea-to-encrypt");
    var outputTextarea = document.getElementById("textarea-encrypted");
    var figure = document.getElementById("no-text-figure");

    
    // Get the text content of the textarea
    var text = inputTextarea.value;
    outputTextarea.value = text;

    //Verify if the retrieved string is empty
    if(text === ""){
        figure.style.display = "block"
        outputTextarea.style.display = "none";
    }else{
        figure.style.display = "none"
        outputTextarea.style.display = "block";
    }

    console.log("Retrieved Text:", text);
    alert("Retrieved Text: " + text);
}

function 