const { height: pageHeaderHeight } = document
  .querySelector(".navigation-wrapper")
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight + 20}px`;
