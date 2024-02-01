const items = document.querySelectorAll(".portfolio-item");
const allItems = document.getElementById("all");
const designItems = document.getElementById("design");
const websiteItems = document.getElementById("website");
const mockupItems = document.getElementById("mockup");

allItems.addEventListener("click", () => {
  filterObjects(allItems.id);
});

designItems.addEventListener("click", () => {
  filterObjects(designItems.id);
});

websiteItems.addEventListener("click", () => {
  filterObjects(websiteItems.id);
});

mockupItems.addEventListener("click", () => {
  filterObjects(mockupItems.id);
});

function filterObjects(filter) {
  if (filter == "all") {
    items.forEach((item) => {
      item.classList.remove("no-show");
    });
  } else {
    items.forEach((item) => {
      item.classList.remove("no-show");
      if (!item.classList.contains(filter)) {
        item.classList.add("no-show");
      }
    });
  }
}
