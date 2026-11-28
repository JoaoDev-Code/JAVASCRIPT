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

// Criando uma função para mostrar os produtos

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

const nome = document.querySelector("#nomeProduto");
const categoria = document.querySelector("#categoria");
const descricao = document.querySelector("#descricao");
const preco = document.querySelector("#preco");

form.addEventListener('submit', function(event){

    event.preventDefault();

    const novoProduto = {
        nome: nome.value,
        categoria: categoria.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    };

    produtos.push(novoProduto);

    mostrarProdutos(produtos);

    form.reset();

});

// Chama a função para mostrar os produtos

mostrarProdutos(produtos);
