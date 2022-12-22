class PhotographerProfileTemplate {
  constructor(cards) {
    this.cards = cards;
  }

  createProfile() {
    let profileTemplate = '';

    const {
      name,
      city,
      country,
      tagline,
      portrait
    } = this.cards;
    profileTemplate = `

      <section class="main__profile-container" role="region" tabindex="0">
        <a class="profile__card-container" title="Visiter la page de profil de ${name} ?"
          href="#" target="blank" role="link">
          <div class="profile__card" tabindex="0">
            <h1 class="profile__name" tabindex="0">${name}</h1>
            <h2 class="profile__location" tabindex="0">${city}, ${country}</h2>
            <h3 class="profile__slogan" tabindex="0">${tagline}</h3>
          </div>
        </a>
        <div class="profile__contact">
          <button type="button" class="button button--rounded" tabindex="0" value="Contactez-moi"
            aria-label="Bouton pour ouvrir la boîte modale pour contacter le photographe">Contactez-moi</button>
        </div>
        <div class="profile__image-container">
          <img src="../assets/images/Photographs_Profile_pictures/${portrait}"
            alt="Photo de profil du compte de: ${name}" class="profile__image" tabindex="0" />
        </div>
      </section>
    `;

    return profileTemplate;
  }
}
