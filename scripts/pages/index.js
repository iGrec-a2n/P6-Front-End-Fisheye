class IndexApp {
  constructor() {
    this.usersDataApi = new PhotographersApi('data/photographers.json');
  }

  async main() {
    const photosData = await this.usersDataApi.getPhotos();

    return photosData;
  }

  static init(dataArray, container) {
    // eslint-disable-next-line no-param-reassign
    container.innerHTML = new UserCardTemplate(dataArray).createCards();
  }
}

const launchApp = new IndexApp().main();

// eslint-disable-next-line prefer-const
let cardsContainer = document.querySelector('.main__cards-container');

launchApp.then((data) => {
  const { photographers, media } = data;
  IndexApp.init(photographers, cardsContainer);
});
