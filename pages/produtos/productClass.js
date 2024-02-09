class Product {
    constructor(CaminhoParaPNG, NomeDoProduto, DescricaoDoProduto, PrecoDoProduto, Loja, LinkDoProduto) {
        this.caminhoParaPNG = CaminhoParaPNG;
        this.nomeDoProduto = NomeDoProduto;
        this.descricaoDoProduto = DescricaoDoProduto;
        this.precoDoProduto = PrecoDoProduto;
        this.loja = Loja;
        this.linkDoProduto = LinkDoProduto;
    } 


    criar() {
        if (this.caminhoParaPNG === null || this.nomeDoProduto === null || this.descricaoDoProduto === null || this.precoDoProduto === null || this.loja === null) {
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
        productName.classList.add("product-name");

        let productDescription = document.createElement("p");
        productDescription.classList.add("product-description");

        let productPrice = document.createElement("h3");
        productPrice.classList.add("product-price");

        let productLink = document.createElement("a");
        productLink.href = this.linkDoProduto;
        productLink.

        //Complementos - Nome
        productName.innerText = this.nomeDoProduto;
        productDescription.innerText = this.descricaoDoProduto;
        productPrice.innerText = this.precoDoProduto;

        productImagem.src = this.caminhoParaPNG;
        productImagem.alt = "Imagem do produto " + this.nomeDoProduto;




        //Montar
        divMain.appendChild(divImg);
        divMain.appendChild(divContent);

        divContent.appendChild(productName);
        divContent.appendChild(productDescription);
        divContent.appendChild(productPrice);

        if (this.loja.toLowerCase() === "aliexpress") {
            let shop = document.createElement("h2");
            shop.classList.add("alert");
            shop.innerText = "Produto Importado";
            divContent.classList.add(shop);
        }

        divImg.appendChild(productImagem);


        return divMain;
    }
}