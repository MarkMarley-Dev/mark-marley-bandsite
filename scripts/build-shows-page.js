const data = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let shows = data;

shows.map((shows) => shows.value);

// ! .. Api Data .. ! //

const BASE_API = "https://project-1-api.herokuapp.com/";
const REGISTER_API = "https://project-1-api.herokuapp.com/register";
const PERSONAL_API_KEY = "48c86835-2e4a-4a12-950d-b7f00dfde05d";
const REQUEST_API = (request) =>
  ` https://project-1-api.herokuapp.com/${request}?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d`;

// ? .. REGISTER REQUEST FOR API KEY.. ? //

axios
  .get(REGISTER_API)
  .then((response) => console.log(response.data))
  .catch((err) => console.log("Something went wrong: ", err));

// ? .. GET COMMENTS .. ? //
axios
  .get(REQUEST_API("comments"))
  .then((response) => console.log(response.data))
  .catch((err) => console.log("Something went wrong: ", err));

let lst = [];
const commentsData = (data) => {
  lst = data.slice();
  console.log(lst);
};

axios
  .get(REQUEST_API("comments"))
  .then(function (response) {
    commentsData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

let showsList = [];
const showsfunc = (data) => {
  showsList = data.slice();
  console.log(showsList);
};

axios
  .get(REQUEST_API("showdates"))
  .then(function (response) {
    showsfunc(response.data);
  })
  .catch((err) => console.log("Something went wrong: ", err));

// ! .. Shows List .. ! //

const showsContainer = document.querySelector(".shows__container");
showsContainer.classList.add("shows__container");

const showTitle = document.createElement("show-title");
showTitle.classList.add("shows-title");
showTitle.innerText = "Shows";

const showTitleContainer = document.createElement("show__title-container");
showTitleContainer.classList.add("shows__title-container");
showsContainer.appendChild(showTitleContainer);
showTitleContainer.appendChild(showTitle);

const showTableHeader = document.createElement("show__table-headers");
showTableHeader.classList.add("show__table-headers");
showTableHeader.innerHTML = "SHOW VENUE LOCATION";

document.querySelector(".shows__div");
const mqTablet = window.matchMedia("(min-width: 768px)");
{
  showsContainer.appendChild(showTableHeader);
}

function createShow(show) {
  if (showsContainer) {
    const showDiv = document.createElement("show__div");
    showDiv.classList.add("shows__div");

    const dateContainer = document.createElement("date-container");
    dateContainer.innerText = "Date";
    dateContainer.classList.add("shows__date-container");

    const showDateContainer = document.createElement("show__date");
    showDateContainer.classList.add("shows__date-actual");
    showDateContainer.innerText = show.date;

    const venueContainer = document.createElement("venue__container");
    venueContainer.classList.add("shows__venue-container");
    venueContainer.innerText = "Venue";

    const showVenueContainer = document.createElement("show__venue");
    showVenueContainer.classList.add("shows__venue-actual");
    showVenueContainer.innerText = show.venue;

    const locationContainer = document.createElement("location__container");
    locationContainer.classList.add("shows__location-container");
    locationContainer.innerText = "Location";

    const showLocationContainer = document.createElement("show__container");
    showLocationContainer.classList.add("shows__location-actual");
    showLocationContainer.innerText = show.location;

    const buyTicketsBtn = document.createElement("button");
    buyTicketsBtn.classList.add("shows__buy__tickets-btn");
    buyTicketsBtn.innerText = "Buy Tickets";

    showsContainer.appendChild(showDiv);
    showDiv.appendChild(dateContainer);
    showDiv.appendChild(showDateContainer);
    showDiv.appendChild(venueContainer);
    showDiv.appendChild(showVenueContainer);
    showDiv.appendChild(locationContainer);
    showDiv.appendChild(showLocationContainer);
    showDiv.appendChild(buyTicketsBtn);
  }
}

function displayShows(shows) {
  shows.forEach((show) => createShow(show));
}

displayShows(shows);
