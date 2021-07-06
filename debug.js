function generateDebug(){
    debugger
    // var text = document.getElementById('convert').value;
    var textArea = document.getElementById("convert");
    var arrayFromTextArea = textArea.value.split(String.fromCharCode(10));
    console.log(arrayFromTextArea);
    document.getElementById('converted').value = arrayFromTextArea;
    // var m = document.getElementById('converted').value;
    var text = [];
    for(let i = 0; i < arrayFromTextArea.length; i++){
       if(arrayFromTextArea[i].search("function") !== -1 ) {
           debugger
           text.push(arrayFromTextArea[i]);
           text.push( "debugger")
       }else{
       text.push(arrayFromTextArea[i]);
       }
    }
    let result = ""
    for(let i = 0; i < text.length; i++){
        result = result + text[i] + "\n";
    }

    document.getElementById('converted').value = result;
}