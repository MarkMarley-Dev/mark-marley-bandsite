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

const showsContainer = document.querySelector(".shows__Container");

function createShow(show) {
  if (showsContainer) {
    const showDiv = document.createElement("show__div");
    showDiv.classList.add("show__div");

    const dateContainer = document.createElement("date__container");
    dateContainer.innerText = "Date";
    dateContainer.classList.add("date__container");

    const showDateContainer = document.createElement("show__date");
    showDateContainer.classList.add("show__date__container");
    showDateContainer.innerText = show.date;

    const venueContainer = document.createElement("venue__container");
    venueContainer.classList.add("venue__container");
    venueContainer.innerText = "Venue";

    const showVenueContainer = document.createElement("show__venue");
    showVenueContainer.classList.add("show__venue__container");
    showVenueContainer.innerText = show.venue;

    const locationContainer = document.createElement("location__container");
    locationContainer.classList.add("location__container");
    locationContainer.innerText = "Location";

    const showLocationContainer = document.createElement("show__container");
    showLocationContainer.classList.add("show__location__container");
    showLocationContainer.innerText = show.location;

    const buyTicketsBtn = document.createElement("buy_btn");
    buyTicketsBtn.classList.add("buy__tickets__btn");
    buyTicketsBtn.innerText = "BUY TICKETS";

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

console.log(shows.date);

// ! Create functionality

const formEl = document.querySelector(".create__form");

const newComment = {
  date,
  venue,
  location,
};

shows.unshift(newComment);

showsContainer.innerHTML = "";

displayComments(shows);

e.target.reset();
