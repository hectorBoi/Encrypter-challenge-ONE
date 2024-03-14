function encrypt() {
    // Get the textarea element by its id
    var inputTextarea = document.getElementById("textarea-to-encrypt");
    var outputTextarea = document.getElementById("textarea-encrypted");
    var figure = document.getElementById("no-text-figure");

    
    // Get the text content of the textarea
    var text = inputTextarea.value;
    text = text.replace(/[&\/\\#+$~%.'":*<>{}]/g, '');
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    text = text.toLowerCase();

    //Verify if the retrieved string is empty
    if(text === ""){
        figure.style.display = "block"
        outputTextarea.style.display = "none";
    }else{
        figure.style.display = "none"
        outputTextarea.style.display = "block";
        outputTextarea.value = encryptor(text);
    }

    console.log("Retrieved Text:", text);
}

function decrypt(){
    // Get the textarea element by its id
    var inputTextarea = document.getElementById("textarea-to-encrypt");
    var outputTextarea = document.getElementById("textarea-encrypted");
    var figure = document.getElementById("no-text-figure");

    
    // Get the text content of the textarea
    var text = inputTextarea.value;

    //Verify if the retrieved string is not empty
    if(text === ""){
        figure.style.display = "block"
        outputTextarea.style.display = "none";
    }else{
        figure.style.display = "none"
        outputTextarea.style.display = "block";
        outputTextarea.value = decryptor(text);
    }

    console.log("decrypted Text:", text);
}

function encryptor(text){
    var input = text;
    
    var output = "";

    for(var i = 0; i < input.length; i++){
        /*
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
        */
        switch(input[i]){
            case 'e':
                output += 'enter';
                break;
            case 'i':
                output += 'imes';
                break;
            case 'a':
                output += 'ai';
                break;
            case 'o':
                output += 'ober';
                break;
            case 'u':
                output += 'ufat';
                break;
            default:
                output += input[i];
        }
    }
    return output;
}

function decryptor(crypticText){
    decoded = "";

    for(var i = 0; i < crypticText.length; i++){
        /*
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
        */
        switch(crypticText[i]){
            case 'e':
                if(crypticText.substring(i,i+5) == 'enter')
                    i += 4;
                decoded += 'e';
                break;
            case 'i':
                if(crypticText.substring(i,i+4) == 'imes')
                    i += 3;
                decoded += 'i';
                break;
            case 'a':
                if(crypticText.substring(i,i+2) == 'ai')
                    i += 1;
                decoded += 'a';
                console.log("Substring to analyze:", crypticText.substring(i,i+2), " Coming from index ",crypticText[i]);
                break;
            case 'o':
                if(crypticText.substring(i,i+4) == 'ober')
                    i += 3;
                decoded += 'o';
                break;
            case 'u':
                if(crypticText.substring(i,i+4) == 'ufat')
                    i += 3;
                decoded += 'u';
                break;
            default:
                decoded += crypticText[i];
        }
    }
    return decoded;

}

function copyToClipboard(){
    var outputTextarea = document.getElementById("textarea-encrypted");
    copyButton = document.getElementById("copy-button");
    navigator.clipboard.writeText(outputTextarea.value);
    copyButton.style.background = "#AAB2D5";
    copyButton.value = "Copied!";
    setTimeout(function(){resetCopyButton()}, 1000);
}

function resetCopyButton(){
    copyButton = document.getElementById("copy-button");
    copyButton.style.background = "#F3F5FC";
    copyButton.value = "Copy";
}

function displayAbout(){
    aboutCard = document.getElementById("about-card-container");
    footer = document.getElementById("myfooter");
    encrypterBody = document.getElementById("my-encrypter");
    header = document.getElementById("the-header");

    footer.style.filter = "blur(3px)";
    encrypterBody.style.filter = "blur(3px)";
    header.style.filter = "blur(3px)";
    aboutCard.style.display = "block";
}

function closeCard(){
    aboutCard = document.getElementById("about-card-container");
    footer = document.getElementById("myfooter");
    encrypterBody = document.getElementById("my-encrypter");
    header = document.getElementById("the-header");

    footer.style.filter = "none";
    encrypterBody.style.filter = "none";
    header.style.filter = "none";
    aboutCard.style.display = "none";
}
