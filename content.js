function getRecommendedElement() {
  const father =
    document.body?.childNodes[1]?.childNodes[0]?.childNodes[0]?.childNodes[1]
      ?.childNodes[0]?.firstChild?.firstChild?.firstChild?.firstChild;
  if (!father) return;
  const main = father?.childNodes[1]?.firstChild?.firstChild?.firstChild;
  const recommendedElement = main?.childNodes[1]?.firstChild?.childNodes[1];
  return recommendedElement;
}

function removeContent() {
  const recommendedElement = getRecommendedElement();

  if (recommendedElement) {
    recommendedElement.style.display = "none";
    recommendedElement.previousSibling.style.margin = "1.25rem 0";
  }
}

function removeSuggestedPosts() {
  const father =
    document.body?.childNodes[1]?.childNodes[0]?.childNodes[0]?.childNodes[1]
      ?.childNodes[0]?.firstChild?.firstChild?.firstChild?.firstChild;
  if (!father) return;
  const main = father?.childNodes[1]?.firstChild?.firstChild?.firstChild;
  const posts =
    main?.firstChild?.firstChild?.childNodes[1]?.firstChild?.firstChild
      ?.firstChild?.childNodes;

  if (posts) {
    let postsEndend = false;
    // loop for each
    for (const post of posts) {
      // get the name of the html tag
      const tagName = post.tagName.toLowerCase();
      console.log(tagName);
      console.log(postsEndend);
      if (tagName === "div") {
        postsEndend = true;
        continue;
      }
      if (post.childElementCount === 2) {
        post.style.display = "none";
        continue;
      }

      if (postsEndend) {
        // post.appendChild(document.createElement("p"));
        // post.lastChild.innerHTML = "Post sugerido LUCAS ";
        // console.log(post);
        // post.innerText =
        //   "Os posts dos seus seguidores acabaram! Este é um post sugerido.";
        // add margim alta para o post sugerido
        post?.firstChild?.childNodes[1]?.remove();
        post?.firstChild?.firstChild?.firstChild?.firstChild.remove();
        post.style.margin = "50rem 0";
      }
    }
  }
}

function observeDOM() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };

  const callback = function (mutationsList, observer) {
    removeContent();
    removeSuggestedPosts();
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
}

window.addEventListener("load", () => {
  observeDOM();
});
