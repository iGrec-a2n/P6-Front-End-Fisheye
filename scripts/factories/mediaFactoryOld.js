

function mediaFactory(data) {
    const { photographerId, title, image, likes, video } = data;
  
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
  