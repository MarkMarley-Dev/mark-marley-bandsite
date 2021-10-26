const data = [
  {
    commentImage: "../assets/Images/Mohan-muruge.jpg",
    commentName: "Conor Walton ",
    commentDate: "02/17/2021",
    commentInfo:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    commentImage: "../assets/Images/Mohan-muruge.jpg",
    commentName: "Emilie Beach",
    commentDate: "01/09/2021",
    commentInfo:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    commentImage: "../assets/Images/Mohan-muruge.jpg",
    commentName: "Miles Acosta",
    commentDate: "12/20/2020",
    commentInfo:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let comments = data;

// higer order function for each going over comments for each
comments.map((comments) => comments.value);

// ! Comments List
const commentsSection = document.querySelector(".comments__section");

function createComment(comment) {
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
    commentImage.setAttribute("src", comment.commentImage);
    commentImage.classList.add("comments__default-img");

    const commentName = document.createElement("h2");
    commentName.innerText = comment.commentName;
    commentName.classList.add("comments__name");

    const commentDate = document.createElement("p");
    commentDate.innerText = comment.commentDate;
    commentDate.classList.add("comments__date");

    const commentInfo = document.createElement("p");
    commentInfo.innerText = comment.commentInfo;
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

  commentsSection.innerHTML = "";

  displayComments(comments);

  e.target.reset();
});
