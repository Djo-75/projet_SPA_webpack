const API_KEY = 'eae69fabb6dc4e2e8bf76cc80ffdceb2'


const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const articleDOM = document.querySelector(".page-detail .article");

    const displayGame = (gameData) => {
      const { name, released, description, rating, background_image, platforms } = gameData;
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.rating span").innerHTML = rating;
      articleDOM.querySelector(".background_image").src = background_image;
  
      // Plateformes 
      const platformsHTML = platforms.map(gamePlatform =>
      `<span class="platform">${gamePlatform.platform.name}</span>`)
      .join(", ");
      articleDOM.querySelector("p.platforms span").innerHTML = platformsHTML;
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
    <article>
        <div class ="details"> 
      <section class="page-detail">
        <div class="article">
        <img class="background_image">
          <h1 class="title"></h1>
          <p class="release-date">Date sortie : <span></span></p>
          <p class="description"></p>
          <p class="platforms">Disponible sur : <span></span></p>
          <p class="rating">Note: <span></span></p>
        </div>
      </section>
      </div>
      </article>
    `;

    preparePage();
  };

  render();
};