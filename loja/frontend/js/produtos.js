async function carregarProdutos() {
  try {
    // URL do backend local
    const response = await fetch("http://localhost:3000/api/produtos");
    const produtos = await response.json();

    const container = document.getElementById("produtos-container");
    container.innerHTML = "";

    produtos.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="http://localhost:3000/${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toLocaleString("pt-BR")}</p>
        <a href="https://wa.me/55SEUNUMERO?text=Olá! Tenho interesse no ${encodeURIComponent(p.nome)}" 
           target="_blank" class="btn">Pedir no WhatsApp</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

carregarProdutos();
