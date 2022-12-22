class PostImage {
  constructor(card) {
    this.card = card;
  }

    // updateMediaType
    createPost() {
      let postTemplate = "";
      const { id, photographerId, title, image, likes, date } = this.card;

      postTemplate = `
        <div class="images__post-container" data-post-id="${id}" data-photographers-id="${photographerId}"
            data-publishing-date="${date}" data-likes="${likes}" data-user-liked="false" data-title="${title}">
            <div class="images__post">
              <a href="#" title="${title}" aria-label="Image nommée ${title}" role="link" tabindex="0">
                <img class="images__image" src="../../assets/images/Posts_medias/images/${image}"
                  alt="'${title}' fait en ${new Date(date).getFullYear()}" />
              </a>
              <div class="images__post-text">
                <p class="images__post-description" tabindex="0">${title}</p>
                <button class="images__post-like-button" title="Mettre un like au post '${title}'?" aria-pressed="false"
                  aria-label="Bouton pour liker la publication nommée '${title}'" tabindex="0">${likes} <i
                    class="fa-solid fa-heart"></i></button>
              </div>
            </div>
          </div>
  
                `;
      return postTemplate;
    }
}
