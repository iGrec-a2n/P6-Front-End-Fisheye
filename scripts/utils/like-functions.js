let updatedStickyBarData = {};

function addLikeToPost() {
  const likeButton = this;

  const postCard = this.closest('.images__post-container');

  // eslint-disable-next-line prefer-const
  let likeButtonHasAlreadyBeenPressed =
    likeButton.classList.contains('active-like');

  let postLikes = new Number(likeButton.textContent.replace(/\D/g,''));

  if (likeButtonHasAlreadyBeenPressed) {
    likeButton.classList.remove('active-like');
    amountOfLikes--;
    postLikes--;

    updateAmountOfLikes(
      likeButton,
      postLikes,
      amountOfLikes,
      amountOfLikesParagraph,
      postCard,
      false
    );
  } else {
    likeButton.classList.add('active-like');
    amountOfLikes++;
    postLikes++;

    updateAmountOfLikes(
      likeButton,
      postLikes,
      amountOfLikes,
      amountOfLikesParagraph,
      postCard,
      true
    );
  }
}
/*
* This function will update the amount of likes in the post
* and the TOTAL amount of likes
*/
function updateAmountOfLikes(
  buttonElement,
  likesOfPost,
  amountOfLikes,
  amountOfLikesParagraph,
  postCard,
  likedOrDisliked
) {
  // eslint-disable-next-line no-param-reassign
  buttonElement.innerHTML = `${likesOfPost} <i class="fa-solid fa-heart" aria-label="Liker le post." title="Liker ce post ?"></i>`;
  updatedStickyBarData = {
    amountOfLikes,
    amountOfLikesParagraph,
  };

  const likeButton = postCard.querySelector('.images__post-like-button');

  postCard.setAttribute('data-likes', `${likesOfPost}`);
  postCard.setAttribute('data-user-liked', `${likedOrDisliked}`);
  likeButton.setAttribute('aria-pressed', `${likedOrDisliked}`);
  PhotographerApp.updateUIOfStickyBar(updatedStickyBarData);
}
