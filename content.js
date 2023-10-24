recommendedIsRemoved = false;
function removeContent() {
  const father =
    document.body.childNodes[1]?.childNodes[0]?.childNodes[0]?.childNodes[1]
      ?.childNodes[0]?.firstChild?.firstChild?.firstChild?.firstChild;
  if (!father) return;
  const sidebar = father.childNodes[0];
  const main = father.childNodes[1].firstChild.firstChild.firstChild;
  const recommended = main?.childNodes[1]?.firstChild.childNodes[1];
  if (recommended) {
    removeRecommendedElement(recommended);
  }
}

const removeRecommendedElement = (recommendedElement) => {
  if (recommendedIsRemoved) return;
  recommendedElement.remove();
  recommendedIsRemoved = true;
};

window.addEventListener("load", () => {
  removeContent();
});
