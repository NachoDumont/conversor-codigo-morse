      function convertir(){
            var letras = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
            var letrasmorse = [ "|", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];

            var texto = document.getElementById("texto").value;
            var morse = "";
            for (var i = 0; i < texto.length; i++) {
                for (var j = 0; j < 37; j++) {
                    if (texto[i].toLowerCase() == letras[j]) {
                        morse += letrasmorse[j];
                        morse += "\xa0\xa0\xa0";
                        break;
                    }
                }
            }
        document.getElementById("morse").innerHTML = morse;
        }