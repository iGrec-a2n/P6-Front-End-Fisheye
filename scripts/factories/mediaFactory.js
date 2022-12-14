class MediaFactory {
    constructor(cardObject, type) {
      if (type === "video") {
        // call createPostVideo here
        return new PostVideo(cardObject);
      } else if (type === "image") {
        // call createPostImage here
        return new PostImage(cardObject);
      } else {
        throw "Photographer factory error: unknown type format";
      }
  }
}
  