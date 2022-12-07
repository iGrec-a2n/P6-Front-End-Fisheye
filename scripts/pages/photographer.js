//Mettre le code JavaScript lié à la page photographer.html

class PhotographerApp {
    constructor() {
      this.usersDataApi = new PhotographersApi("../data/photographers.json");
    }
  
    //Retrives the data from the JSON file
    main() {
      const photosData = this.usersDataApi.getPhotos();
      return photosData;
    }
  
    static getInfosOfPhotographer(arrayOfUsers, urlIdOfPhotographer) {
      let photographerInfosObject = {};
      for (let i = 0; i < arrayOfUsers.length; i++) {
        let user = arrayOfUsers[i];
        const { id } = user;
        if (id === urlIdOfPhotographer) {
          photographerInfosObject = user;
        }
      }
      amountOfLikesParagraph.innerHTML = `${amountOfLikes} <i class="fa-solid fa-heart"></i>`;
      priceParagraph.textContent = `${photographerObject.price}€ / jour`;
      descriptionMetaTag.setAttribute(
        "description",
        `Découvrez les photos prises par ${photographerObject.name}!`
      );
      titleMetaTag.textContent = `Fisheye - ${photographerObject.name}`;
  
      return photographerInfosObject;
    }
  
    static getPostsOfPhotographer(arrayOfPosts, urlIdOfPhotographer) {
      let photographersPostsArray = [];
  
      photographersPostsArray = arrayOfPosts.filter((post) => {
        return post.photographerId === urlIdOfPhotographer;
      });
  
      return photographersPostsArray;
    }
  
    static sortPostsByProperty(arrayOfPosts, sortProperty) {
      let sortedArray = [];
      switch (sortProperty) {
        case "titre": {
          sortedArray = arrayOfPosts.sort((post1, post2) => {
            return post1.title.localeCompare(post2.title);
          });
          break;
        }
        case "popularité": {
          sortedArray = arrayOfPosts.sort((post1, post2) => {
            return post2.likes - post1.likes;
          });
          break;
        }
        case "date": {
          sortedArray = arrayOfPosts.sort((post1, post2) => {
            return post2.date - post1.date;
          });
          break;
        }
      }
  
      return sortedArray;
    }
  
    //Static method that fills the profile infos
    static changeUIOfProfile(dataObject, container) {
      container.innerHTML = new PhotographerProfileTemplate(
        dataObject
      ).createProfile();
    }
  
    //Static method that fills the container for the posts
    static changeUIOfPosts(dataArray, container) {
      container.innerHTML = new PhotographerProfileTemplate(
        dataArray
      ).createPosts();
    }
  
    static changeUIOfPostsV2(postObject, type, container) {
      let template = new MediaFactory(postObject, type);
      container.innerHTML += template.postTemplate;
    }
  
    static updateUIOfStickyBar(photographerObject) {
      new StickyBarTemplate(photographerObject).updateStickyBar();
    }
  
    static changeUIOfStickyBar(photographerObject) {
      new StickyBarTemplate(photographerObject).createStickyBar();
    }
  }
  
  //DOM elements
  const profileContainer = document.querySelector(".main__profile-wrapper");
  
  const postsContainer = document.querySelector(".images");
  
  const amountOfLikesParagraph = document.querySelector(".main__amount-of-likes");
  
  const priceParagraph = document.querySelector(".main__price");
  
  const titleMetaTag = document.querySelector("title");
  
  const descriptionMetaTag = document.querySelector("meta[name=description]");
  
  //
  const launchPhotographerApp = new PhotographerApp().main();
  
  //
  let urlPhotographerId = Number(getUrlParameter("id"));
  
  let photographerObject = {};
  let photographerMediaArray = [];
  let arrayOfLikes = [];
  
  let amountOfLikes = 0;
  
  let profileData = {};
  //
  launchPhotographerApp.then((data) => {
    const { photographers, media } = data;
  
    //Calling static methods to recover the different infos
    photographerObject = PhotographerApp.getInfosOfPhotographer(
      photographers,
      urlPhotographerId
    );
  
    photographerMediaArray = PhotographerApp.getPostsOfPhotographer(
      media,
      urlPhotographerId
    );
  
    //Initialising different arrays
    arrayOfLikes = photographerMediaArray.map((media) => {
      return media.likes;
    });
  
    amountOfLikes = arrayOfLikes.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });
  
    //Data for the sticky bar
    let stickyBarData = {
      amountOfLikesParagraph,
      priceParagraph,
      titleMetaTag,
      descriptionMetaTag,
      amountOfLikes,
    };
  
    //Calling static methods to add fill the page
    PhotographerApp.changeUIOfStickyBar(stickyBarData);
    PhotographerApp.changeUIOfProfile(photographerObject, profileContainer);
  
    // PhotographerApp.changeUIOfPosts(photographerMediaArray, postsContainer);
    for (post of photographerMediaArray) {
      let postHasImageOrVideo = post.image !== undefined ? "image" : "video";
      PhotographerApp.changeUIOfPostsV2(
        post,
        postHasImageOrVideo,
        postsContainer
      );
    }
  
    //Calling a function to add all the different event listeners
    addPostFeatures();
  });
  
  //Function that adds all the different event listeners
  function addPostFeatures() {
    const contactButton = profileContainer.querySelector(".button");
  
    const nameOfContactModal = document.querySelector(".contact__title");
  
    nameOfContactModal.innerHTML = `Contactez-moi <br/> ${photographerObject.name}`;
  
    const postsCard = postsContainer.querySelectorAll(".images__post-container");
    const postsCardArray = Array.from(postsCard);
  
    //Code for the contact modal
    contactButton.addEventListener("click", displayContactModal);
    contactButton.addEventListener("touchstart", displayContactModal); //For mobile devices
  
    //Code to sort the posts
    //1. For mobile devices
    const selectSortElement = document.querySelector("select");
  
    selectSortElement.addEventListener("change", sortPostsForMobile);
  
    //2. For widescreen devices
    const buttonSortElement = document.querySelector(
      ".dropdown-menu__sort-button"
    );
  
    buttonSortElement.addEventListener("click", sortPostsForWidescreens);
  
    //Code for the lightbox-carousel modal
    for (post of postsCardArray) {
      const linkToOpenModal = post.querySelector("a[href]");
      linkToOpenModal.addEventListener("click", displayLightboxModal);
      linkToOpenModal.addEventListener("touchstart", displayLightboxModal); //For mobile devices
  
      const likeButton = post.querySelector(".images__post-like-button");
      likeButton.addEventListener("click", addLikeToPost);
    }
  }
  