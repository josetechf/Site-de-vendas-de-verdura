let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoContador = document.getElementById('carrinho-contador');
  const carrinhoTotal = document.getElementById('carrinho-total');
  const carrinhoItens = document.getElementById('carrinho-itens');

  let total = 0;
  carrinhoItens.innerHTML = '';
  
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
    carrinhoItens.appendChild(li);
    total += item.preco;
  });

  carrinhoContador.textContent = carrinho.length;
  carrinhoTotal.textContent = total.toFixed(2);
}

function toggleCarrinho() {
  const carrinhoElement = document.getElementById('carrinho');
  const isHidden = carrinhoElement.getAttribute('aria-hidden') === 'true';
  
  carrinhoElement.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
  carrinhoElement.style.display = isHidden ? 'block' : 'none';
}

function limparCarrinho() {
  carrinho = [];
  atualizarCarrinho();
  toggleCarrinho();
}


