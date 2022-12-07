function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const photographerCard = document.createElement("article");
    photographerCard.innerHTML = `
        <a href="photographer.html?id=${id}">
            <img class="portrait-img" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
            <h2 class="portrait-name">${name}</h2>
        </a>
            <p class="portrait-city">${city}, ${country}</p>
            <p class="portrait-tagline">${tagline}</p>
            <p class="portrait-price">${price}€/jour</p>
        `;
    return photographerCard;
  }

  function getPhotographerHeader() {
    const photographerHeader = document.querySelector(".photographer-header");
    const getPhotographerHeaderBody = document.createElement("div");

    getPhotographerHeaderBody.classList.add("photographer-header-container");
    getPhotographerHeaderBody.innerHTML = `
        <div class="photographer-header-container-portrait">
            <h2 class="portrait-name">${name}</h2>
            <p class="portrait-city">${city}, ${country}</p>
            <p class="portrait-tagline">${tagline}</p>
        </div>
        <button class="contact-button" onclick="displayModal()">Contactez-moi</button>
        <img class="portrait-img" src="${picture}" alt="${id}" title="picture of" + "${id}">
        `;
    return getPhotographerHeaderBody;
  }

  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait,
    picture,
    getUserCardDOM,
    getPhotographerHeader,
  };
}

function mediaFactory() {
  const { photographerId, title, image, likes, video } = data;

  // create a variable for choosing to display video or image
  let mediaStyle;
  // si image = false on va chercher la vidéo sinon on affiche l'id image
  if (!image) {
    const videoElement = `<video><source src="./assets/images/${photographerId}/${video}#t=5.0" type="video/mp4"></video>`;
    mediaStyle = videoElement;
  } else {
    const imageElement = `<img src="./assets/images/${photographerId}/${image}"/>`;
    mediaStyle = imageElement;
  }

  function getMediaFactory() {
    const photographerMedias = document.querySelector(
      ".photographer-medias-container"
    );
    // create a new article balise in html
    const photographerMediasArticle = document.createElement("article");
    // add a class id to the article
    photographerMediasArticle.classList.add("photographer-article");
    photographerMediasArticle.innerHTML += `
          ${mediaStyle}
          <div class="photographer-article-text">
            <h3>${title}</h3>
            <div class="photographer-article-like">
                <span class="likes">${likes}</span>
                <button class="photographer-article-like-icon">
                    <i class="fa-solid fa-heart fa-like"></i>
                </button>
            </div>
          </div>
    `;
    // display new html for checking if $media is video or image
    return photographerMediasArticle;
  }
  // display all new html creating
  return {
    photographerId,
    title,
    image,
    likes,
    video,
    getMediaFactory,
  };
}

function navFactory(data) {
  const { price, likes } = data;

  // get media in photographers.jason with html
  function getNavFactory() {
    const photographerNav = document.createElement("div");
    // add class to th new div
    photographerNav.classList.add("photographer-nav");
    // create the html of the new div with tags variable data
    photographerNav.innerHTML = `
      <ul class="photographer-nav-like">
        <li class="photographer-nav-like-total">${likes}</li>
        <li><i class="fa-solid fa-heart"></i></li>
      </ul>
      <p>${price}€ / jour</p>
          `;
    // display new div checking likes and prices
    return photographerNav;
  }
  // display all new html creating
  return {
    price,
    likes,
    getNavFactory,
  };
}
