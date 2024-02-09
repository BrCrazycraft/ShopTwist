var pixeis = {
    "e-categoria-outros": 0,
    "e-categoria-casa": 0, 
    "e-categoria-dinheiro": 0,
    "e-categoria-conhecimento": 0, 
    "e-categoria-pessoais": 0, 
    "categorias-casa": 0,
    "categorias-acessorio": 0, 
    "categorias-vestuario": 0, 
    "categorias-eletronico": 0
};


function gaveta_switch(id) {
    var selecionado = document.getElementById(id);

    console.log(id, selecionado);

    if (selecionado.classList.contains("esconder")) {
        selecionado.classList.remove("esconder");
        selecionado.classList.add("aparecer-" + id);
    } else if (selecionado.classList.contains("aparecer-" + id)) {
        selecionado.classList.remove("aparecer-" + id);
        selecionado.classList.add("esconder");
    }

    console.log("aparecer-" + id);
}


function inicio() {
    var ids = [
        "e-categoria-dinheiro",
        "e-categoria-conhecimento", "e-categoria-pessoais", "categorias-casa",
        "categorias-eletronico"
    ];

    var style = document.createElement("style");

    ids.forEach(id => {
        var selecionado = document.getElementById(id);
        style.innerHTML += ".aparecer-" + id + " { height: " + selecionado.offsetHeight + "px; transition: 1s; }\n";

        if (!selecionado.classList.contains("esconder") && !selecionado.classList.contains("aparecer")) {
            selecionado.classList.add("esconder");
        }

        
        console.log(style.innerHTML);
        
    });

    document.getElementsByTagName("head")[0].appendChild(style);

    document.getElementsByTagName("head")[0].childNodes.forEach(childs => {
        console.log(childs);
    });
}