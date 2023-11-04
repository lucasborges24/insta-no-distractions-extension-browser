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

function observeDOM() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };

  const callback = function (mutationsList, observer) {
    removeContent();
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
}

window.addEventListener("load", () => {
  observeDOM();
});
