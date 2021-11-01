const BASE_API = "https://project-1-api.herokuapp.com/";
const REGISTER_API = "https://project-1-api.herokuapp.com/register";
const PERSONAL_API_KEY = "48c86835-2e4a-4a12-950d-b7f00dfde05d";
const REQUEST_API = (request) =>
  ` https://project-1-api.herokuapp.com/${request}?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d`;
console.log(REQUEST_API("comments"));

// ? .. REGISTER REQUEST FOR API KEY.. ? //

axios
  .get(REGISTER_API)
  .then((response) => console.log("API key to access data", response.data))
  .catch((err) => console.log("Something went wrong: ", err));

// ? .. GET COMMENTS .. ? //
const getCommentsData = () => {
  return axios.get(REQUEST_API("comments")).then((res) => {
    let comments = res.data;
    console.log(comments);
  });
};

getCommentsData();

// .catch((err) => console.log("Something went wrong: ", err));
// const getShowsData = () => {
//   return axios
//     .get(REQUEST_API("showdates"))
//     .then((res) => {
//       let shows = res.data;
//       console.log(shows);
//       shows.forEach((show) => postShows(show));
//     })
//     .catch((err) => console.log("You have a error", err));
// };

const getComments = () => {
  return axios
    .get(REQUEST_API("comments"))
    .then((res) => {
      const sortedComments = res.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      sortedComments.forEach((comment) => createComment(comment));
    })
    .catch((err) => console.log("You have a error", err));
};

const commentsSection = document.querySelector(".comments__section");

const createComment = (comment) => {
  if (commentsSection) {
    const div = document.createElement("div");
    div.classList.add("comments");

    const divImg = document.createElement("div");
    divImg.classList.add("divImg");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");

    const commentInfoContainer = document.createElement("div");
    commentInfoContainer.classList.add("commentsInfoContainer");

    const commentImage = document.createElement("img");
    commentImage.classList.add("comments__default-img");

    const commentName = document.createElement("h2");
    commentName.innerText = comment.name;
    commentName.classList.add("comments__name");

    let intDate = parseInt(comment.timestamp);
    let myDate = new Date(intDate);
    const commentDate = document.createElement("p");
    commentDate.classList.add("comments__date");
    commentDate.innerHTML = `${
      myDate.getMonth() + 1
    }/${myDate.getDate()}/${myDate.getFullYear()}`;
    const commentInfo = document.createElement("p");
    commentInfo.innerText = comment.comment;
    commentInfo.classList.add("comments__info");

    commentsSection.appendChild(div);
    div.appendChild(divImg);
    divImg.appendChild(commentImage);
    div.appendChild(commentInfoContainer);
    commentInfoContainer.appendChild(headerContainer);
    headerContainer.appendChild(commentName);
    headerContainer.appendChild(commentDate);
    commentInfoContainer.appendChild(commentInfo);
  }
};
getComments();

function displayFormComments(comment) {
  comment.forEach((comment) => {
    const commentName = document.createElement("h2");
    commentName.innerText = comment.name;
    commentName.classList.add("comments__name");
    comment.timestamp.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
  });
}


// ! .. Form Functions .. ! //

// ? .. Post function .. ? //

const form = document.querySelector(".create__form");
const formEvent = form.addEventListener("submit", (event) => {
  console.log("you pushed the submit button");
  event.preventDefault();
  const commentNameForm = event.target.commentName.value;
  const commentInfoForm = event.target.commentsInfo.value;
  // const commentTimestampForm = event.target.commentstimestamp.value;
  console.log("form name text", commentNameForm);
  commentsSection.innerHTML = "";

  postComment(commentNameForm, commentInfoForm).then(() => getComments());

  event.target.reset();
});
const postComment = (commentNameForm, commentInfoForm) => {
  return axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d",

      {
        name: commentNameForm,
        comment: commentInfoForm,
      }
    )
    .then((response) => {
      console.log(response);
      // const data = response.data;
      // data.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)).then;
      // newComments.forEach((comment) => {
      //   createComment(comment.name, comment.comment, comment.timestamp);
    })
    .catch((err) => {
      console.log("You have a error", err);
    });
};

// cleardata();

//         const newComments = response.data
//           .sort(function (a, b) {
//             return b.timestamp - a.timestamp;
//           })
//           .then((response) => {
//             newComments.forEach((comment) => {
//               generateCommentl(
//                 comment.name,
//                 comment.comment,
//                 comment.timestamp
//               );
//             });
//           });
//         createCommentForm();
//       });
//     // createCommentForm();
//   };
// });
