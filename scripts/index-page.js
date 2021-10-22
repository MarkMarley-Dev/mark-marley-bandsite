window.onclick = function (e) {
  e.preventDefault();
  let id = e.target.id;
  if (id === "submit") {
    let text = document.getElementById("comment__text").value;
    $("#comments__append__info").empty().append(text);
  }
};
console.log("hello world");
