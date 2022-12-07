class IndexApp {
    constructor() {
      this.usersDataApi = new PhotographersApi("data/photographers.json");
    }
  
    async main() {
        const photosData = await this.usersDataApi.getPhotos();

        return photosData;
    }
  
    static init(dataArray, container) {
      container.innerHTML = new UserCardTemplate(dataArray).createCards();
    }
  }
  
  const launchApp = new IndexApp().main();
  
  let cardsContainer = document.querySelector(".main__cards-container");
  
  launchApp.then((data) => {
    const { photographers, media } = data;
    IndexApp.init(photographers, cardsContainer);
  });
  