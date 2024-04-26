const about = (function () {
  function build() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let intro = document.createElement("div");
    let header = document.createElement("h1");
    header.innerHTML = "Our chiefs!!!";
    intro.appendChild(header);
    let numberChiefs = 3;

    let chiefInform = returnChiefInform();
    for (let i = 0; i < numberChiefs; i++) {
      const element = document.createElement("div");
      element.classList.add("Chief");

      let title = document.createElement("p");
      let text = document.createElement("p");

      title.innerHTML = chiefInform[i][1];
      text.innerHTML = chiefInform[i][2];

      intro.appendChild(element);
      element.appendChild(title);
      element.appendChild(text);
    }

    content.appendChild(intro);
    intro.classList.add("about");
  }
  function returnChiefInform() {
    let information = [
      [
        "1",
        "Gordon Ramsay",
        "Celebrated British chef known for his fiery TV presence and Michelin-starred restaurants worldwide. A prolific author and media personality, Ramsay epitomizes culinary excellence and entertainment.",
      ],
      [
        "2",
        "Jamie Oliver",
        "British chef famed for his easy, healthy recipes and global food education campaigns. Oliver’s media-friendly approach has made him a household name in promoting better dietary habits.",
      ],
      [
        "3",
        "Alain Ducasse",
        "French culinary maestro with Michelin stars across three cities. Ducasse is renowned for his exquisite cooking, culinary schools, and a dedication to the art of fine dining.",
      ],
    ];
    return information;
  }
  return { build: build };
})();
export { about };
