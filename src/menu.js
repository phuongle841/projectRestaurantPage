const menu = (function () {
  function build() {
    let content = document.querySelector("#content");
    let intro = document.createElement("div");
    content.appendChild(intro);
    intro.classList.add("intro");

    let introHeader = "Experience the Flavor Journey at Tam Vi!";
    let introContent =
      "Welcome to Tam Vi in VietNam, where culinary excellence meets charm. Our menu blends local and international flavors, each dish crafted with the freshest ingredients. Perfect for any occasion, from casual lunches to special celebrations, we're committed to making each visit memorable. Join us for a unique dining experience that will tantalize your taste buds!";

    let headerP = document.createElement("p");
    let contentP = document.createElement("p");

    headerP.textContent = introHeader;
    contentP.textContent = introContent;

    intro.appendChild(headerP);
    intro.appendChild(contentP);
  }
  return { build: build };
})();
export { menu };
