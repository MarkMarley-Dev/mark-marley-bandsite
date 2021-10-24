const data = [
  {
    commentName: "Conor Walton ",
    commentDate: "02/17/2021",
    commentInfo:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    commentName: "Emilie Beach",
    commentDate: "01/09/2021",
    commentInfo:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    commentImage: "",
    commentName: "Miles Acosta",
    commentDate: "12/20/2020",
    commentInfo:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let comments = data.splice(-3);

const shoppingCart = [];

comments.map((comments) => comments.value);

// ! Comments List
let commentsList = document.getElementById("comments__list");

function createComment(comment) {
  if (commentsList) {
    const divImg = document.createElement("divImg");
    divImg.classList.add("divImg");

    const div = document.createElement("div");
    div.classList.add("comments__form");

    const commentImage = document.createElement("img");
    // commentImage.setAttribute("src", "comment.commentImage");
    commentImage.classList.add("comments__default__img");

    const commentName = document.createElement("h2");
    commentName.innerText = comment.commentName;
    commentName.classList.add("comments__sub-title");

    div.classList.add("comments__default__names");
    const commentDate = document.createElement("p");
    commentDate.innerText = comment.commentDate;

    const commentInfo = document.createElement("p");
    commentInfo.innerText = comment.commentInfo;

    div.addEventListener("click", () =>
      console.log(`You have selected: ${comment.commentName}`)
    );

    divImg.append(commentImage);
    div.append(commentImage, commentName, commentInfo, commentDate);
    commentsList.appendChild(div, divImg);
  }
}

function displayComments(comments) {
  comments.forEach((comment) => createComment(comment));
}

displayComments(comments);

// ! Create functionality

const formEl = document.querySelector(".create__form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentName = e.target.commentName.value;

  const commentInfo = e.target.commentInfo.value;

  const newComment = {
    commentName,
    commentInfo,
  };

  comments.unshift(newComment);

  commentsList.innerHTML = "";

  displayComments(comments);

  e.target.reset();
});
