export function autoExpandTextarea() {
  document.querySelectorAll("textarea").forEach((el) => {
    autoExpandOnToggle();
    el.classList.add("auto");
    el.addEventListener("input", (e) => {
      el.style.height = el.scrollHeight + "px";
    });
  });
}
function autoExpandOnToggle() {
  document.querySelectorAll("details").forEach((el) => {
    el.addEventListener("toggle", (e) => {
      //TODO: fyrer omkring 26 gange!
      el.querySelectorAll("textarea").forEach((ta) => {
        ta.style.height = ta.scrollHeight + "px";
      });
    });
  });
}
