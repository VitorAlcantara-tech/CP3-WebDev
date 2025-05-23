const btnProsseguir = document.getElementById('btn__prosseguir');
const disponiveis = document.getElementById('myCheckbox');
const btnFiltrar = document.getElementById('btn__filtrar');
const btnMostrar = document.getElementById('btn__todos');
const selectFiltro = document.getElementById('my-select');
const titulo = document.getElementById('titulo');
const containerFilmes = document.getElementById('container__filmes');

const filmes = [
  { nome: "O Poderoso Chefão", preco: 19.90, categoria: "Drama", disponibilidade: true },
  { nome: "Vingadores: Ultimato", preco: 29.90, categoria: "Ação", disponibilidade: true },
  { nome: "Interestelar", preco: 24.90, categoria: "Ficção Científica", disponibilidade: false },
  { nome: "Coringa", preco: 22.50, categoria: "Suspense", disponibilidade: true },
  { nome: "Frozen II", preco: 18.00, categoria: "Animação", disponibilidade: true },
  { nome: "Parasita", preco: 21.90, categoria: "Drama", disponibilidade: true },
  { nome: "Pantera Negra", preco: 25.00, categoria: "Ação", disponibilidade: false },
  { nome: "Toy Story 4", preco: 17.90, categoria: "Animação", disponibilidade: true },
  { nome: "1917", preco: 23.50, categoria: "Ação", disponibilidade: true },
  { nome: "O Rei Leão", preco: 20.00, categoria: "Animação", disponibilidade: false }
];

btnProsseguir.addEventListener('click', function(){
    
    const tituloH1 = document.querySelector('#titulo h1');
    const paragrafo = document.createElement('p')

    tituloH1.innerText = 'Catálogo de Filmes Online'
    paragrafo.innerHTML = '<p>CheckPoint 03 - WebDevelopment</p>'

    titulo.appendChild(paragrafo);
    btnProsseguir.style.display = "none";
})


disponiveis.addEventListener('click', ()=> {
    containerFilmes.innerHTML = ''

    let disponiveis = []
    
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].disponibilidade === true){
            console.log('funcionando')
            disponiveis.push(filmes[i]);
        }
    }

    disponiveis.forEach((filme, index) => {
    const box = document.createElement("div");
    box.className = "box__filme";

    box.innerHTML = `
        <h3>${filme.nome}</h3>
        <p><strong>Preço:</strong> R$ ${filme.preco.toFixed(2)}</p>
        <p><strong>Categoria:</strong> ${filme.categoria}</p>
        <p><strong>Disponível:</strong> ${filme.disponibilidade ? "Sim" : "Não"}</p>
    `;

    containerFilmes.appendChild(box);
    });
})


btnMostrar.addEventListener('click', function(event){
    event.preventDefault();

    filmes.forEach((filme, index) => {
    const box = document.createElement("div");
    box.className = "box__filme";

    box.innerHTML = `
        <h3>${filme.nome}</h3>
        <p><strong>Preço:</strong> R$ ${filme.preco.toFixed(2)}</p>
        <p><strong>Categoria:</strong> ${filme.categoria}</p>
        <p><strong>Disponível:</strong> ${filme.disponibilidade ? "Sim" : "Não"}</p>
    `;

    containerFilmes.appendChild(box);
    });
 });



btnFiltrar.addEventListener('click', function (event) {
    event.preventDefault();

    containerFilmes.innerHTML= ''

  const filtro = selectFiltro.value;
  let filtrados = [];

  if (filtro === 'acao') {
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].categoria === 'Ação'){
        filtrados.push(filmes[i])
    }
    }

  } else if (filtro === 'drama') {
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].categoria === 'Drama')
            filtrados.push(filmes[i])
    }

  }  else if (filtro === 'suspense') {
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].categoria === 'Suspense')
            filtrados.push(filmes[i])
    }
  }

   else if (filtro === 'ficcao') {
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].categoria === 'Ficção Científica')
            filtrados.push(filmes[i])
    }
   }

    else if (filtro === 'animacao') {
        for (let i = 0; i < filmes.length; i++){
            if (filmes[i].categoria === 'Animação'){
                filtrados.push(filmes[i]);
    }
  }
}
    
  console.log(filtrados)

  filtrados.forEach((filme, index) => {
    const box = document.createElement("div");
    box.className = "box__filme";

    box.innerHTML = `
        <h3>${filme.nome}</h3>
        <p><strong>Preço:</strong> R$ ${filme.preco.toFixed(2)}</p>
        <p><strong>Categoria:</strong> ${filme.categoria}</p>
        <p><strong>Disponível:</strong> ${filme.disponibilidade ? "Sim" : "Não"}</p>
    `;

    containerFilmes.appendChild(box);
    });

});
