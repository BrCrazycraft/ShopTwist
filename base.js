window.addEventListener("scroll", () => {
    const navbar = document.getElementById("barra-lista");

    if (window.scrollY > 0) {
        navbar.style.display = 'none';
    }
})

function carregar() {
    const slot1Img = document.getElementById('destaque-slot1-img');
    slot1Img.setAttribute("src", "/recursos/teste.jpg");
}

function clicou(elemento) {
    const content = document.getElementById(elemento);

    if (content != null) {
        content.classList.toggle('esconder');
        content.classList.toggle('aparecer');
    }
}


function menu() {
    const lista = document.getElementById("barra-lista");

    if (lista.style.display == "none") {
        lista.style.display = 'block';
    } else {
        lista.style.display = 'none';
    }
}