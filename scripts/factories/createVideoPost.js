class PostVideo {
  constructor(card) {
    this.card = card;
  }

  createPost() {
    let postTemplate = "";
    const { id, photographerId, title, video, likes, date } = this.card;
    console.log(this.card);

    postTemplate = `
              
             <div class="images__post-container" data-post-id="${id}" data-photographers-id="${photographerId}"
              data-publishing-date="${date}" data-likes="${likes}" data-user-liked="false" data-title="${title}">
    
              <div class="images__post">
                <a href="#" title="${title}" aria-label="Video nommée ${title} fait en ${new Date(
      date
    ).getFullYear()}" role="link" tabindex="0">
                  <video src="../../assets/images/Posts_medias/videos/${video}" class="images__video">
                  </video>
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

        // console.table(video);
    return postTemplate ;
  }
}
