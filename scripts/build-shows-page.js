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

// ! .. Shows List .. ! //

const showsContainer = document.querySelector(".shows__container");
showsContainer.classList.add("shows__container");

const showTitle = document.createElement("show__title");
showTitle.classList.add("shows__title");
showTitle.innerText = "Shows";

const showTitleContainer = document.createElement("show__title__container");
showTitleContainer.classList.add("shows__title__container");
showsContainer.appendChild(showTitleContainer);
showTitleContainer.appendChild(showTitle);

function createShow(show) {
  if (showsContainer) {
    const showDiv = document.createElement("show__div");
    showDiv.classList.add("shows__div");

    const dateContainer = document.createElement("date__container");
    dateContainer.innerText = "Date";
    dateContainer.classList.add("shows__date__container");

    const showDateContainer = document.createElement("show__date");
    showDateContainer.classList.add("shows__date__actual");
    showDateContainer.innerText = show.date;

    const venueContainer = document.createElement("venue__container");
    venueContainer.classList.add("shows__venue__container");
    venueContainer.innerText = "Venue";

    const showVenueContainer = document.createElement("show__venue");
    showVenueContainer.classList.add("shows__venue__actual");
    showVenueContainer.innerText = show.venue;

    const locationContainer = document.createElement("location__container");
    locationContainer.classList.add("shows__location__container");
    locationContainer.innerText = "Location";

    const showLocationContainer = document.createElement("show__container");
    showLocationContainer.classList.add("shows__location__actual");
    showLocationContainer.innerText = show.location;

    const buyTicketsBtn = document.createElement("button");
    buyTicketsBtn.classList.add("shows__buy__tickets__btn");
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
