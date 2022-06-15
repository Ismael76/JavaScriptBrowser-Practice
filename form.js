let form = document.querySelector("#form");

let submit = document.getElementById("submitbtn");

let greeting = document.querySelector("#greeting");

let message = document.querySelector("#message");

let optionOne = document.querySelector("#birthday");
let optionTwo = document.querySelector("#newyear");
let optionThree = document.querySelector("#wedding");

let cardMessage = document.querySelector(".card-message");

let cardHeading = document.querySelector(".card-greeting");

let cardEvent = document.querySelector(".card-event");

let card = document.getElementById("#cardbox");

let img = document.getElementById("card-img");

optionOne.addEventListener("click", () => {
  if (optionOne.checked === true) {
    greeting.setAttribute("value", "Happy Birthday To, ");
  }
});

optionTwo.addEventListener("click", () => {
  if (optionTwo.checked === true) {
    greeting.setAttribute("value", "Happy New Year");
  }
});

optionThree.addEventListener("click", () => {
  if (optionThree.checked === true) {
    greeting.setAttribute("value", "Congratulations, ");
  }
});

function hideForm(e) {
  e.preventDefault();
  e.target.style.display = "none";
  card.classList.add("card");

  if (optionOne.checked === true) {
    cardEvent.textContent = "Birthday";
    cardHeading.textContent = greeting.value;
  } else if (optionTwo.checked === true) {
    cardEvent.textContent = "New Year";
  } else if (optionThree.checked === true) {
    cardEvent.textContent = "Wedding";
  } else {
    cardEvent.textContent = "No Event Has Been Selected";
  }

  cardMessage.textContent = message.value;

  getPhoto();
}

form.addEventListener("submit", hideForm);

function getPhoto() {
  fetch(
    "https://api.unsplash.com/search/photos?query=birthday&client_id=9Y4WCd4wD0wCrsZFD4NpIVeMAop6tYgKn9IK21VXo4E"
  )
    .then((response) => {
      console.log(response.json());
    })
    .then((data) => {
      let img = data.results[0];
      console.log("this is running!");
      img.setAttribute("src", img.urls.regular);
    });
}
