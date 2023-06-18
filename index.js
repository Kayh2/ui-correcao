function enviarRespostas() {
  // Obter os valores dos inputs
  const valorGlicemia = document.querySelector("#glicemia").value;
  const valorCarboidratos = document.querySelector("#carboidratos").value;

  let meta = 100;
  let reducao = 100;
  let reducaoCarbo = 30;

  const corrigirGlicemia = (valorGlicemia - meta) / reducao;
  const corrigirCarbo = valorCarboidratos / reducaoCarbo;
  const totalUI = Math.round(corrigirGlicemia + corrigirCarbo);
  document.getElementById("resultado").value = `${totalUI} U.I`;
}