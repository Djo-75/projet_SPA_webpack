const PageList = (argument = "") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayResults = (articles) => {
      const resultsContent = articles.map(
        (article) =>
        `<article>
        <div class="card"> 
          <img class="game-cover" src=${article.background_image} alt="jeu vidéo">
          <div class="card-body">
            <h2>${article.name.substring(0, 20)}</h2>
            <p>Date sortie : ${article.released}</p>
            <p>Note : ${article.rating}</p> 
            <p>Genre : ${console.log(article)}</p> 
            <button class="btn btn-dark" onclick="location.href='#'">Accueil</button>
            <button class="btn btn-dark" onclick="location.href='#pagedetail/${article.id}'">En savoir +</button>
            </div>
        </div>
        </article>`
      );
      const resultsContainer = document.querySelector("#pageContent");
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">On cherche !</div>
      </section>
    `;
    pageContent.style.display = "grid";
    pageContent.style.gridTemplateColumns = "repeat(3, 1fr)"; // fractionne l'espace disponible en 3


    preparePage();
  };

  render();
};
