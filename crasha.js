let spreadsheetId = '1x3GZTJPw8wpCR0sjYPrFRZlY7LXGHu7Yd8GMZAHO2vE';
let posicaoUm = 0;
let posicaoDois = posicaoUm + 9;
let range = 'Turmasdb!A' + posicaoUm + ':C' + posicaoDois;
let apiKey = 'AIzaSyBJf7yNdLqhaBRb5VK5gbqJ7CbR0Gu3oLY';

let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
let pagina = 0;


function printHere() {
    print()
}

function proximaPag() {
    var estudante;
    var matricula;
    var img;
    var linkQR;

   
        posicaoUm = posicaoUm + 9;
        posicaoDois = posicaoUm + 9;
        if (posicaoUm < 0){
            posicaoUm = 0
            posicaoDois = posicaoUm + 9;
        }
    

    range = 'Turmasdb!A' + posicaoUm + ':C' + posicaoDois;
    url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    var idI = 0;
    var idE = 0;
    var idM = 0;
    var idQR = 0;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw new Error(`Erro: ${error.error.message}`);
                });
            }
            return response.json();
        })
        .then(data => {
            const values = data.values;
            for (let i = 0; i < 9; i++) {

                idI = idI + 1;
                idE = idE + 10;
                idM = idM + 100;
                idQR = idQR + 1000;

                estudante = values[i][0];
                matricula = values[i][1];
                img = values[i][2];

                linkQR = "https://quickchart.io/qr?text=https://suap.ifsul.edu.br/edu/aluno/"+matricula+"&size=&1600";

                document.getElementById(idI).src = img;
                document.getElementById(idE).innerHTML = estudante;
                document.getElementById(idM).innerHTML = matricula;
                document.getElementById(idQR).src = linkQR;
            }
        });
        pagina = pagina + 1;
        document.getElementById("pagina").innerHTML = ("Pagina "+pagina+" de 34");
}

function anteriorPag() {
    var estudante;
    var matricula;
    var img;

   
        posicaoUm = posicaoUm - 9;
        posicaoDois = posicaoUm + 9;
        if (posicaoUm < 0){
            posicaoUm = 9
            posicaoDois = posicaoUm + 9;
        }
    

    range = 'Turmasdb!A' + posicaoUm + ':C' + posicaoDois;
    url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    var idI = 0;
    var idE = 0;
    var idM = 0;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw new Error(`Erro: ${error.error.message}`);
                });
            }
            return response.json();
        })
        .then(data => {
            const values = data.values;
            for (let i = 0; i < 9; i++) {

                idI = idI + 1;
                idE = idE + 10;
                idM = idM + 100;

                estudante = values[i][0];
                matricula = values[i][1];
                img = values[i][2];

                document.getElementById(idI).src = img;
                document.getElementById(idE).innerHTML = estudante;
                document.getElementById(idM).innerHTML = matricula;
            }
        });
        pagina = pagina - 1;
        document.getElementById("pagina").innerHTML = ("Pagina "+pagina+" de 34");
}

