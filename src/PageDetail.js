const API_KEY = 'eae69fabb6dc4e2e8bf76cc80ffdceb2'


const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      console.log(gameData)
      const { name, released, description, rating } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.rating span").innerHTML = rating;
      articleDOM.querySelector("p.genre span").innerHTML = genres[0].name;
    };
    
    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };
    
    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
          <p class="rating">Note: <span></span></p>
          <a class="platform"></a>
        </div>
      </section>
    `;
    //Définir la grille CSS
    pageContent.style.display = "grid";
    pageContent.style.gridTemplateColumns = "repeat(3, 1fr)"; // fractionne l'espace disponible en 3
    pageContent.style.gridGap = "20px";
    preparePage();
  };

  render();
};