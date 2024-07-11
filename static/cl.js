function getResult(display) {
    let inputText = display.value
    let zahl1 = ""
    let zahl2 = ""
    let operation = ""

    if(inputText.includes("+")) {
        let pos = inputText.indexOf("+")
        operation = "+";
        zahl1 = inputText.slice(0, pos);
        zahl2 = inputText.slice(pos + 1);

    } else if(inputText.includes("-")) {
        let pos = inputText.indexOf("-")
        operation = "-";
        zahl1 = inputText.slice(0, pos);
        zahl2 = inputText.slice(pos + 1);

    } else if(inputText.includes("*")) {
        let pos = inputText.indexOf("*")
        operation = "*";
        zahl1 = inputText.slice(0, pos);
        zahl2 = inputText.slice(pos + 1);

    } else if(inputText.includes(":")) {
        let pos = inputText.indexOf(":")
        operation = ":";
        zahl1 = inputText.slice(0, pos);
        zahl2 = inputText.slice(pos + 1);
    }

    fetch("result/"+zahl1+"/"+encodeURIComponent(operation)+"/"+zahl2)
        .then(httpResponse => {
            httpResponse.text()
                .then(rechenErgebnis => {
                    display.value = rechenErgebnis
                })
        })
}