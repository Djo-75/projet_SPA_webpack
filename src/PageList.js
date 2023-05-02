const PageList = (argument = "") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayResults = (articles) => {
      const resultsContent = articles.map(
        (article) =>
        `<article>
        <div class="card" style="width: 18rem;">
        <h2>${article.name}</h2> 
          <img class="game-cover" src=${article.background_image} class="card-img-top" alt="...">
          <div class="card-body">
            <p>Date sortie : ${article.released}</p> 
            <p>Note : ${article.rating}</p> 
            <p>Plateforme : ${article.platforms[0].platform.name}</p>
            <p>Genre : ${article.genres[0].name}</p> 
            <a href="#pagedetail/${article.id}">${article.id}</a>
            </div>
        </div>
        </article>`
      );
      const resultsContainer = document.querySelector(".page-list .articles");
      resultsContainer.innerHTML = resultsContent.join("\n");
      console.log(resultsContent.inner)
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
        <div class="articles row">On cherche !
      </section>
    `;


    preparePage();
  };

  render();
};
