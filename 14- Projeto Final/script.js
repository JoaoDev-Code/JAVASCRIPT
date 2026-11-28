
const produtos = [
    {
        nome: "Notebook Dell Inspiron",
        categoria: "Eletrônicos",
        preco: 3500,
        descricao: "Um notebook bom e barato."
    },
    {
        nome: "Mouse Logitech",
        categoria: "Periféricos",
        preco: 120,
        descricao: "Um mouse de alta qualidade."
    },
    {
        nome: "Teclado Mecânico",
        categoria: "Periféricos",
        preco: 350,
        descricao: "Teclado gamer mecânico."
    }
];

const lista = document.querySelector("#lista-produtos");
const form = document.querySelector("#form-produto");

const nome = document.querySelector("#nomeProduto");
const categoria = document.querySelector("#categoria");
const descricao = document.querySelector("#descricao");
const preco = document.querySelector("#preco");

const busca = document.querySelector("#busca");

// Função para mostrar os produtos

function mostrarProdutos(produtos) {

    lista.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {

        lista.innerHTML += `
            <li class="card-produto">
                <div class="informacoes">

                    <span class="categoria">
                        ${produtos[i].categoria}
                    </span>

                    <h2>${produtos[i].nome}</h2>

                    <p>${produtos[i].descricao}</p>

                    <strong>R$ ${produtos[i].preco.toFixed(2)}</strong>

                </div>
            </li>
        `;
    }
}

// Filtrador de produtos

busca.addEventListener("input", function() {

    const pesquisa = busca.value.toLowerCase();

    const produtosFiltrados = produtos.filter(function(produto) {

        return produto.nome.toLowerCase().includes(pesquisa) ||
               produto.categoria.toLowerCase().includes(pesquisa) ||
               produto.descricao.toLowerCase().includes(pesquisa);

    });

    mostrarProdutos(produtosFiltrados);

});

// Cadastro de novos produtos

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const novoProduto = {
        nome: nome.value,
        categoria: categoria.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    };

    produtos.push(novoProduto);

    mostrarProdutos(produtos.filter(function(produto) {

        const pesquisa = busca.value.toLowerCase();

        return produto.nome.toLowerCase().includes(pesquisa) ||
               produto.categoria.toLowerCase().includes(pesquisa) ||
               produto.descricao.toLowerCase().includes(pesquisa);

    }));

    form.reset();

});

// Mostrar produtos inicialmente

mostrarProdutos(produtos);
