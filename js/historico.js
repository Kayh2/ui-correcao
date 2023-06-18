// Recupera os dados do histórico do localStorage
const historicoData = JSON.parse(localStorage.getItem("historico")) || [];

// Obtém a referência da lista de histórico no HTML
const historicoList = document.getElementById("historico-list");

// Itera sobre os dados do histórico e cria itens de lista para exibição
historicoData.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = `Data: ${item.data}, Hora: ${item.hora}, Glicemia: ${item.glicemia}, Carboidratos: ${item.carboidratos}, U.I: ${item.ui}`;
  historicoList.appendChild(listItem);
});
