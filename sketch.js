// Animação simples com p5.js
function setup() {
    let canvas = createCanvas(windowWidth, 100);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    background(240, 255, 240);
}

function draw() {
    noStroke();
    fill(100, 200, 100, 50);
    ellipse(mouseX, mouseY, 20, 20);
}

// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
window.addEventListener('load', atualizarCarrinho);

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    salvarCarrinho();
    atualizarCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-itens');
    const carrinhoTotal = document.getElementById('carrinho-total');
    const contador = document.getElementById('carrinho-contador');

    carrinhoLista.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.produto} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerItem(${index})" style="margin-left:10px;color:red;">Remover</button>
        `;
        carrinhoLista.appendChild(li);
        total += item.preco;
    });

    carrinhoTotal.textContent = total.toFixed(2);
    contador.textContent = carrinho.length;
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function toggleCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = carrinhoDiv.style.display === 'block' ? 'none' : 'block';
}
