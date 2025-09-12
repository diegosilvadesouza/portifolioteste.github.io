let playerHP = 1000;
let enemyHP = 1000;
let playerPokemon = "bbshark";

function escolherPokemon(nome) {
  playerPokemon = nome;
  document.getElementById("nomePlayer").textContent = nome;

  let imgSrc = {
    Charmander: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    Squirtle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    Bulbasaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  };

  document.getElementById("imgPlayer").src = imgSrc[nome];
  document.querySelector(".selecionar").style.display = "none";
  document.getElementById("batalha").style.display = "block";
}

function atacar() {
  let danoPlayer = Math.floor(Math.random() * 25) + 5;
  let danoInimigo = Math.floor(Math.random() * 25) + 5;

  enemyHP -= danoPlayer;
  playerHP -= danoInimigo;

  if (enemyHP < 0) enemyHP = 0;
  if (playerHP < 0) playerHP = 0;

  document.getElementById("vidaPlayer").style.width = playerHP + "%";
  document.getElementById("vidaInimigo").style.width = enemyHP + "%";

  let resultado = document.getElementById("resultado");

  if (enemyHP === 0) {
    resultado.textContent = " Você venceu! Pikachu foi derrotado!";
  } else if (playerHP === 0) {
    resultado.textContent = " Você perdeu! Pikachu venceu!";
  } else {
    resultado.textContent = `${playerPokemon} causou ${danoPlayer} de dano. Pikachu revidou com ${danoInimigo}.`;
  }
}
