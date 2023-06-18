function enviarRespostas() {
  // Obter os valores dos inputs
  const valorGlicemia = parseFloat(document.querySelector("#glicemia").value);
  const valorCarboidratos = parseFloat(
    document.querySelector("#carboidratos").value
  );
  const glicemiaError = document.getElementById("glicemia-error");
  const carboidratosError = document.getElementById("carboidratos-error");
  let send = true;

  if (isNaN(valorGlicemia)) {
    send = false;
    glicemiaError.textContent = "Insira um valor numérico";
  } else {
    glicemiaError.textContent = "";
  }

  if (isNaN(valorCarboidratos)) {
    send = false;
    carboidratosError.textContent = "Insira um valor numérico.";
  } else {
    carboidratosError.textContent = "";
  }

  let meta = 100;
  let reducao = 100;
  let reducaoCarbo = 30;

  const corrigirGlicemia = (valorGlicemia - meta) / reducao;
  const corrigirCarbo = valorCarboidratos / reducaoCarbo;
  const totalUI = Math.round(corrigirGlicemia + corrigirCarbo);

  const dataHoraAtual = new Date();
  const data = dataHoraAtual.toLocaleDateString();
  const hora = dataHoraAtual.toLocaleTimeString();

  const dados = {
    glicemia: `${valorGlicemia} mg/dL`,
    carboidratos: `${valorCarboidratos} g`,
    ui: totalUI,
    data: data,
    hora: hora,
  };

  if (send) {
    adicionarAoHistorico(dados);
    return (document.getElementById("resultado").value = `${totalUI} U.I`);
  }
}

function limparInputs() {
  document.getElementById("glicemia").value = "";
  document.getElementById("carboidratos").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("glicemia-error").textContent = "";
  document.getElementById("carboidratos-error").textContent = "";
}

function verHistorico() {
  window.location.href = "historico.html";
}

function adicionarAoHistorico(dados) {
  // Verificar se já existe um histórico armazenado
  const historicoArmazenado = JSON.parse(localStorage.getItem("historico")) || [];

  // Adicionar os novos dados ao histórico
  historicoArmazenado.push(dados);

  // Atualizar o histórico no localStorage
  localStorage.setItem("historico", JSON.stringify(historicoArmazenado));
}