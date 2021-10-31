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

const commentsData = () => {
  return axios
    .get(REQUEST_API("comments"))
    .then((res) => {
      let comments = res.data;
      console.log(comments);
      comments.forEach((comment) => createComment(comment));
    })
    .catch((err) => console.log("You have a error", err));
};

const commentsSection = document.querySelector(".comments__section");

const createComment = (comment) => {
  if (commentsSection) {
    const div = document.createElement("div");
    div.classList.add("comment");

    const divImg = document.createElement("div");
    divImg.classList.add("divImg");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");

    const commentInfoContainer = document.createElement("div");
    commentInfoContainer.classList.add("commentInfoContainer");

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
commentsData();

function displayFormComments(comment) {
  comment.forEach((comment) => {
    const commentName = document.createElement("h2");
    commentName.innerText = comment.name;
    commentName.classList.add("comments__name");
  });
}
// displayComments(comments);

// ! .. Form Functions .. ! //
// application / json; //
// ? .. Post function .. ? //

// const commentNameForm = document.querySelector(".comment__text-area-name");

// const commentInfoForm = document.querySelector(".comment__text-area");

// change to a post request in function
// add const different variables to function above to include them without destroying other function

// const commentNameForm = e.target.commentName.value;
// const commentInfoForm = e.target.commentInfo.value;

// const newComment = {
//   commentNameForm,
//   commentInfoForm,
// };

// comment.unshift(newComment);

// commentsSection.innerHTML = "";

// displayFormComments(comment);

// e.target.reset();
// });

// addForm();

// axios
//   .post(
//     "https://project-1-api.herokuapp.com/${request}?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d",
//     newComment
//   )
//   .then((response) => console.log("Post response", response))
//   .catch((err) => console.log("Something went wrong: ", err));

// const createCommentForm = () => {
//   return axios
//     .post("https://project-1-api.herokuapp.com/comments?api_key=$%7BKEY_API%7D")
//     .then((response) => {
//       console.log(response.data);
//       const CommentResponse = response.data;
//       console.log("POST: user is added", CommentResponse);
//       // append to DOM
//       createComment(CommentResponse);
//     })
//     .catch((error) => console.error(error));
// };
// createCommentForm();
// const form = document.querySelector(".create__form");
// const formEvent = form.addEventListener("submit", (event) => {
//   console.log("you pushed the submit button");
//   event.preventDefault();
//   const commentNameForm = event.target.commentName.value;
//   const commentInfoForm = event.target.commentInfo.value;

//   const commentForm = { commentNameForm, commentInfoForm };

//   createComment(commentForm);
// });

const form = document.querySelector(".create__form");
const formEvent = form.addEventListener("submit", (event) => {
  console.log("you pushed the submit button");
  event.preventDefault();
  const commentNameForm = event.target.commentName.value;
  const commentInfoForm = event.target.commentInfo.value;
  const commentForm = { commentNameForm, commentInfoForm };

  // const clearForm = () => {
  //   document.getElementById("form").slice();
  // };

  const createCommentForm = () => {
    return axios
      .post(
        "https://project-1-api.herokuapp.com/comments?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d",
        {
          name: commentNameForm,
          comment: commentInfoForm,
        }
      )
      .then(
        (response) => {
          console.log(response);
          const cleardata = () => {
            comments.unshift(commentForm);

            commentsSection.innerHTML = "";

            createComment(comments);

            e.target.reset();
          };
          cleardata();
        },

        (error) => {
          console.log(error);
        }
      );
  };
  createCommentForm();
});

// const commentNameForm = document.querySelector(
//   ".comment__text-area-name"
// ).value;
// const commentInfoForm = document.querySelector(".comment__text-area").value;

// const commentNameFormRequest = document.querySelector("commentName");
// const commentInfoFormRequest = document.querySelector("commentInfo");
// const DeleteItem = () => {
//   return axios
//     .delete(
//       `https://project-1-api.herokuapp.com/comments/5:?api_key=48c86835-2e4a-4a12-950d-b7f00dfde05d`
//     )
//     .then(
//       (response) => {
//         console.log(response);
//       },

//       (error) => {
//         console.log(error);
//       }
//     );
// };
// DeleteItem();
