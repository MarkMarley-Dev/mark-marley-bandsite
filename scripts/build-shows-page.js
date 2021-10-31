// ! .. Shows List .. ! //

const showsContainer = document.querySelector(".shows__container");
showsContainer.classList.add("shows__container");

const showTitle = document.createElement("show__title");
showTitle.classList.add("shows__title");
showTitle.innerText = "Shows";

const showTitleContainer = document.createElement("shows__title-container");
showTitleContainer.classList.add("shows__title-container");
showsContainer.appendChild(showTitleContainer);
showTitleContainer.appendChild(showTitle);

const showSubtitleContainer = document.createElement(
  "shows__sub-title-container"
);
showSubtitleContainer.classList.add("shows__sub-title-container");
showsContainer.appendChild(showSubtitleContainer);

const titleDate = document.createElement("p");
titleDate.classList.add("shows__sub-title-tabplus");
titleDate.innerText = "DATES";
showSubtitleContainer.appendChild(titleDate);

const titleVenue = document.createElement("p");
titleVenue.classList.add("shows__tabplus-venue");
titleVenue.innerText = "VENUE";
showSubtitleContainer.appendChild(titleVenue);

const titleLocationPlus = document.createElement("p");
titleLocationPlus.classList.add("shows__tabplus-location");
titleLocationPlus.innerText = "LOCATION";
showSubtitleContainer.appendChild(titleLocationPlus);

const btnBox = document.createElement("p");
btnBox.classList.add("shows__tabplus-btn");
showSubtitleContainer.appendChild(btnBox);

function createShowContainer() {
  const showDiv = document.createElement("ul");
  showDiv.classList.add("show__div-ul");
  const showContainer = document.querySelector(".shows__container");
  showContainer.appendChild(showDiv);
}
createShowContainer();

// ! .. Api Data .. ! //

const BASE_API = "https://project-1-api.herokuapp.com/";
const REGISTER_API = "https://project-1-api.herokuapp.com/register";
const PERSONAL_API_KEY = "48c86835-2e4a-4a12-950d-b7f00dfde05d";
const REQUEST_API = (request) =>
  ` https://project-1-api.herokuapp.com/${request}?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d`;

const getShowsData = () => {
  return axios
    .get(REQUEST_API("showdates"))
    .then((res) => {
      let shows = res.data;
      console.log(shows);
      shows.forEach((show) => postShows(show));
    })
    .catch((err) => console.log("You have a error", err));
};

getShowsData();
const postShows = (show) => {
  const showBox = document.createElement("div");
  showBox.classList.add("shows__div");
  const showContainer = document.querySelector(".shows__container");

  showContainer.appendChild(showBox);

  const titleDate = document.createElement("h4");
  titleDate.classList.add("shows__sub-title");
  titleDate.innerText = "DATES";
  showBox.appendChild(titleDate);

  let intDate = parseInt(show.date);
  let myDate = new Date(intDate);
  const showDate = document.createElement("p");
  showDate.classList.add("shows__date-actual");
  showDate.innerHTML = `${
    myDate.getMonth() + 1
  }/${myDate.getDate()}/${myDate.getFullYear()}`;
  showBox.appendChild(showDate);

  const titleVenue = document.createElement("h4");
  titleVenue.classList.add("shows__sub-title");
  titleVenue.innerText = "VENUE";
  showBox.appendChild(titleVenue);

  const showVenue = document.createElement("p");
  showVenue.classList.add("shows__venue-actual");
  showVenue.innerText = show.place;
  showBox.appendChild(showVenue);

  const titleLocation = document.createElement("h4");
  titleLocation.classList.add("shows__sub-title");
  titleLocation.innerText = "LOCATION";
  showBox.appendChild(titleLocation);

  const showLocation = document.createElement("p");
  showLocation.classList.add("shows__location-actual");
  showLocation.innerText = show.location;
  showBox.appendChild(showLocation);

  const createBtn = document.createElement("p");
  createBtn.classList.add("shows__buy-tickets-btn");
  createBtn.innerText = "Buy Tickets";
  showBox.appendChild(createBtn);
};

// create function called displayTable(table)
// creates a instance of each table
//

// console.log(showDate);
// const showDateContainer = document.createElement("show__date");
// showDateContainer.classList.add("shows__date-actual");
// showDateContainer.innerText = showDate;

// console.log(showVenue);
