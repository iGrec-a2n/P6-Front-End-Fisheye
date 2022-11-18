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
    return photographerHeaderContainer;
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
