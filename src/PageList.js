const PageList = (argument = '') => {


  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <h1>Nom ${article.name}</h1> 
          <h2>Date sortie ${article.released}</h2> 
          <p>Note ${article.rating}</p> 
          <p>Plateforme ${article.platforms[0].platform.name}</p>
          <p>${article.genres[0].name}</p> // Faire une boucle car plusieurs genres
          <img src=${article.background_image}>

          <a href="#pagedetail/${article.id}">${article.id}</a>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;
    // // Définir la grille CSS
    // pageContent.style.display = "grid";
    // pageContent.style.gridTemplateColumns = "repeat(3, 0.6fr)"; // fractionne l'espace disponible en 3
    // pageContent.style.gridGap = "20px";

    preparePage();
  };

  render();
};