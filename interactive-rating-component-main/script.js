const numberButtons = document.querySelectorAll(".voting-btn");
const submitRatingBtn = document.getElementById("submitRatingBtn");
const ratingCard = document.getElementById("ratingCard");
const feedbackCard = document.getElementById("feedbackCard");
const numberRating = document.getElementById("numberRating");
let selectedRating = null;

/* when one of the buttons is clicked*/
function handleClickNumberBtn({ target }) {
  removeAllActiveClass();
  target.classList.add("active");
  selectedRating = target.value;
}
/*rest of the buttons */
function removeAllActiveClass() {
  numberButtons.forEach((button) => button.classList.remove("active"));
}
/*when submit button is clicked */
function handleRatingSubmit() {
  if (!selectedRating) {
    return alert("Please choose a rating!");
  }

  numberRating.textContent = selectedRating;
  feedbackCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
}
/* */
numberButtons.forEach((button) => {
  button.addEventListener("click", handleClickNumberBtn);
});
submitRatingBtn.addEventListener("click", handleRatingSubmit);