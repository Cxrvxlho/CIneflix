// Variáveis iniciais
var exist;
var vetorListaFilmes = [];
var vetorListaNomesFilmes = [];
var listaFilmes = document.getElementById("listaFilmes");

// Função da tela
// acrescentar e validar imagens
function adicionarImagem(nomeFilme, link) {
  listaFilmes.innerHTML += "<img src=" + link + ">"; //inserindo filme na div
  listaFilmes.innerHTML += `<p class="nome"> ${nomeFilme} </p>`;
}

function verificarSeExiste(filme) {
  if (link == filme || nomeFilme == filme) {
    exist = 1;
  }
}

// Função array
function carregarItensPagina() {
  listaFilmes.innerHTML = "";

  for (let i = 0; i < vetorListaFilmes.length; i++) {
    adicionarImagem(vetorListaNomesFilmes[i], vetorListaFilmes[i]);
  }
}

// Chamar a atenção do usuário e inserir o nome
function adicionarFilme() {
  link = document.getElementById("filme").value;

  nomeFilme = document.getElementById("nomeFilme").value;

  //Campos vazios, link e inserir novos filmes - forEach se já existe
  if (nomeFilme != "" && link != "") {
    //apeanas ficheiros jpg podem aparecer
    if (link.endsWith(".jpg") || link.endsWith(".png")) {
      vetorListaFilmes.forEach(verificarSeExiste);
      vetorListaNomesFilmes.forEach(verificarSeExiste);

      if (exist == 1) {
        alert("Filme já está adicionado");
        exist = 0;
      } else {
        vetorListaFilmes.push(link);
        vetorListaNomesFilmes.push(nomeFilme);
        carregarItensPagina();
      }
    } else {
      alert("Formato do caminho inválido");
    }

    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
  } else {
    alert("Preencha todos os campos");
  }
}

function removerFilme() {
  nomeFilme = document.getElementById("nomeFilme").value;
  link = document.getElementById("filme").value;

  //Verificando se já existe
  for (let i = 0; i < vetorListaFilmes.length; i++) {
    if (nomeFilme == vetorListaNomesFilmes[i] && link == vetorListaFilmes[i]) {
      exist = 1;
    }
  }

  if (exist == 1) {
    vetorListaFilmes.pop(link);
    vetorListaNomesFilmes.pop(nomeFilme);
    carregarItensPagina();
    exist = 0;
  } else {
    alert("Filme não encontrado na lista");
  }
}