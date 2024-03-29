function ProductMain(CaminhoParaPNG, NomeDoProduto, DescricaoDoProduto, PrecoDoProduto, Loja, LinkDoProduto) {
    if (CaminhoParaPNG === null || NomeDoProduto === null || DescricaoDoProduto === null || PrecoDoProduto === null || Loja === null || LinkDoProduto === null) {
        return null;
    }


    let divMain = document.createElement("div");
    divMain.classList.add("product");
    
    let divImg = document.createElement("div");
    divImg.classList.add("product-img");

    let divContent = document.createElement("div");
    divContent.classList.add("product-content");

    let productImagem = document.createElement("img");

    let productName = document.createElement("h2");

    let productDescription = document.createElement("p");

    let productPrice = document.createElement("h3");

    let productLink = document.createElement("a");


    //Complementos - Nome
    productName.innerText = NomeDoProduto;
    productDescription.innerText = DescricaoDoProduto;
    productPrice.innerText = "Preço: " + PrecoDoProduto;

    productImagem.src = CaminhoParaPNG;
    productImagem.alt = "Imagem do produto " + NomeDoProduto;

    productLink.innerText = "Comprar";
    productLink.href = LinkDoProduto;
    productLink.target = "_blank";

    //Montar
    divMain.appendChild(divImg);
    divMain.appendChild(divContent);

    divContent.appendChild(productName);
    divContent.appendChild(productDescription);
    divContent.appendChild(productPrice);
    divContent.appendChild(productLink);

    if (Loja === "aliexpress") {
        let shop = document.createElement("h3");
        shop.classList.add("alert");
        shop.innerText = "Produto Importado";
        divContent.appendChild(shop);
    }

    divImg.appendChild(productImagem);


    return divMain;
}

function constructor(path) {
    fetch(path).then(response => response.text()).then(text => {
        let productList = text.split("\n");
        productList.forEach(element => {
            let product = element.split(";");
            if (product.length != 1) {
                if (product[5] == "eletronico") {
                    let productContent = ProductMain(product[0], product[1], product[2], product[3], product[4], product[6]);
                    document.getElementById("product-List").appendChild(productContent);
                }
            }
        });
    }).catch(erro => {
        console.log(erro);
    });
}

constructor("../../produtos/a.txt");