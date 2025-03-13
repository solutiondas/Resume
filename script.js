
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

function showContent(targetId) {
  contents.forEach(content => {
    content.classList.remove("active");
    if (content.id === targetId) {
      content.classList.add("active");
    }
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const target = tab.getAttribute("data-target");
    showContent(target);
  });
});
