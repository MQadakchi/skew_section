const skewed = document.querySelector(".skewd");
window.addEventListener("scroll", () => {
  let value = -10 + window.scrollY / 100;
  skewed.style.transform = `skewY(${value}deg)`;
});
