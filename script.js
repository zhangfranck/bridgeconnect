/* Popup */
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function closeForm() {
  if (confirm("Are you sure you want to delete this post?")) {
      document.getElementById("popupForm").style.display = "none";
  }
}

/* Vérifies si un message est stocké dans le localStorage */
var message = localStorage.getItem("message");

/* S'il y a un message, alors le remettre dans l'input */
if (message) {
  document.getElementById("message").value = message;
}

/* Stocker le message dans le localStorage chaque fois que le message sera modifié */
document.getElementById("message").oninput = function() {
  localStorage.setItem("message", this.value);
};


  

/* tags en haut des posts */
const tagList = document.querySelector("#tagList");
const posts = document.querySelectorAll(".post");

tagList.addEventListener("click", function(event) {
  if (event.target.matches(".tag")) {
    const selectedTag = event.target.dataset.tag;
    updateDisplay(selectedTag);
    updateCSSVariables(selectedTag);
  }
});

function updateDisplay(selectedTag) {
  posts.forEach(function(post) {
    if (selectedTag) {
      if (post.dataset.tags.includes(selectedTag)) {
        post.classList.add("active");
      } else {
        post.classList.remove("active");
      }
    } else {
      post.classList.add("active");
    }
  });
}

function updateCSSVariables(selectedTag) {
  document.body.dataset.selectedTag = selectedTag;
}






