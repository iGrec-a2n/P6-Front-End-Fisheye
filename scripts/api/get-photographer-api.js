/* eslint-disable prefer-const */
/* eslint-disable max-classes-per-file */

// Create api to get photos

class Api {
  constructor(url) {
    this.url = url;
  }

  async get() {
    // eslint-disable-next-line no-undef-init
    let data = undefined;
    try {
      let response = await fetch(this.url);

      if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw `An error has occured while attempting to retrieve data: ${JSON.stringify(
          response
        )}`;
      }
      data = await response.json();
    } catch (apiError) {
      console.log(
        `%c${apiError}`,
        'padding: 10px; font-size: 24px; background: crimson'
      );
      data = apiError;
    }
    return data;
  }
}

class PhotographersApi extends Api {
  // eslint-disable-next-line no-useless-constructor
  constructor(url) {
    super(url);
  }

  getPhotos() {
    return this.get();
  }
}
