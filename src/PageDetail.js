const API_KEY = 'eae69fabb6dc4e2e8bf76cc80ffdceb2'


const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const articleDOM = document.querySelector(".page-detail .article");

    const displayGame = (gameData) => {
      const { name,
         released,
         description, 
         rating, 
         background_image, 
         platforms, 
         genres, 
         developers,
         tags,
         website,
         ratings_count,
         stores } = gameData;
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.rating span").innerHTML = rating;
      articleDOM.querySelector(".background_image").src = background_image;
      articleDOM.querySelector("p.ratings_count span").innerHTML = ratings_count;
      console.log(gameData)
  
      // Plateformes 
      const platformsHTML = platforms.map(gamePlatform =>
      `<span class="platform">${gamePlatform.platform.name}</span>`)
      .join(", ");
      articleDOM.querySelector("p.platforms span").innerHTML = platformsHTML;

      // Genres 
      const genresHTML = genres.map(genresGame =>
        `<span class="genres">${genresGame.name}</span>`)
        .join(", ");
        articleDOM.querySelector("p.genres span").innerHTML = genresHTML;

      // Développeurs 
      const developersHTML = developers.map(devs =>
        `<span class="developers">${devs.name}</span>`)
        .join(", ");
        articleDOM.querySelector("p.developers span").innerHTML = developersHTML;

      // Tags 
      const tagsHTML = tags.map(tagsGame =>
        `<span class="tags">${tagsGame.name}</span>`)
        .join(", ");
        articleDOM.querySelector("p.tags span").innerHTML = tagsHTML;

      // Site web
      const websiteHTML = `<a href="${website}" target="_self">${website}</a>` //target_blank ouvre l'élément dans une nouvelle fenêtre, self dans la même
      articleDOM.querySelector("p.website span").innerHTML = websiteHTML;

      // 4 screenshots
      

      // Liens pour acheter le jeu
      const storesHTML = stores.map(gameStore => 
      `<a href="http://${gameStore.store.domain}" target="_self">${gameStore.store.name}</a>`); //target_blank ouvre l'élément dans une nouvelle fenêtre, self dans la même
      articleDOM.querySelector("p.stores span").innerHTML = storesHTML;
      console.log(stores)
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
          <p class="rating">Note : <span></span></p>
          <p class="ratings_count">Nombre notes : <span></span></p>
          <p class="genres">Type jeu : <span></span></p>
          <p class="developers">Développeurs : <span></span></p>
          <p class="tags">Tags : <span></span></p>
          <p class="website">Site officiel : <span></span></p>
          <p class="stores">Où acheter le jeu : <span></span></p>
        </div>
      </section>
      </div>
      </article>
    `;

    preparePage();
  };

  render();
};