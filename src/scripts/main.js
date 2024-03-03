let textarea = document.querySelector('textarea');
let boxResult = document.querySelector('#result');



function criptografar() {
    let content = textarea.value.toLowerCase();
    let listContent = content.split('');
    
    let newList = [];

    listContent.forEach((letra) => {
        switch (letra) {
            case "e":
                newList.push("enter");
                break;
            case "j":
                newList.push("imes");
                break;
            case "a":
                newList.push("ai");
                break;
            case "o":
                newList.push("ober");
                break;
            case "u":
                newList.push("ufat");
                break;
            default:
                newList.push(letra);
        }
    });

    console.log(newList.join(''));
}

function descriptografar() {
        let content = textarea.value.toLowerCase();
        let decryptedMessage = "";
    
        for (let i = 0; i < content.length; i++) {
            if (content.startsWith("enter", i)) {
                decryptedMessage += "e";
                i += 4;
            }
            else if (content.startsWith("imes", i)) {
                decryptedMessage += "i";
                i += 3;
            } else if (content.startsWith("ai", i)) {
                decryptedMessage += "a";
                i += 1;
            } else if (content.startsWith("ober", i)) {
                decryptedMessage += "o";
                i += 3;
            } else if (content.startsWith("ufat", i)) {
                decryptedMessage += "u";
                i += 3;
            } else {
                decryptedMessage += content[i];
            }
        }
    
        console.log("String descriptografada:", decryptedMessage);
    
}