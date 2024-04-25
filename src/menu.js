const menu = (function () {
  function build() {
    let content = document.querySelector("#content");
    // wipe the old content out
    content.innerHTML = "";
    let intro = document.createElement("div");
    let numberDishes = 6;

    for (let i = 0; i < numberDishes; i++) {
      const element = document.createElement("div");
      let img = document.createElement("img");
      let describe = document.createElement("div");
      let tittle = document.createElement("p");
      let text = document.createElement("p");

      intro.appendChild(element);
      element.appendChild(img);
      element.appendChild(describe);
      describe.appendChild(tittle);
      describe.appendChild(text);
      element.classList.add("dish");
      tittle.classList.add("title");
      text.classList.add("text");

      tittle.innerHTML = returnTitleDescribe()[i][0];
      text.innerHTML = returnTitleDescribe()[i][1];
      img.src = returnImgUrl()[i];
    }

    content.appendChild(intro);
    intro.classList.add("menu");
  }
  function returnImgUrl() {
    let src = [
      "https://www.allrecipes.com/thmb/B-UHlyOzhTbkPmTjFFk9Eg_hLzs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/7558696_Spicy-Canned-Salmon-Salad-Rice-Bowl_Chef-Mo_4x3-6efacad1958d41d892d0b30ec8a7d3a7.jpg",
      "https://www.allrecipes.com/thmb/zA8Crwk2sgmFLRdncRVfR_5uOIA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(2070x1578:2072x1580):format(webp)/8580443-copycat-mcdonalds-filet-o-fish-sandwich-3x4-261-1-cb3e45079acf4b05bb77923bff3ffba1.jpg",
      "https://www.allrecipes.com/thmb/8C0ugDH4UWJahFL-FaXJqdysnow=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(660x0:662x2):format(webp)/8964132-cb3b46c1bb7e42c7abd8f869c7361ee7.jpg",
      "https://www.allrecipes.com/thmb/lU4yXY0hIIxR6s52hYQSxJoyLB8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(957x639:959x641):format(webp)/91499-GeneralTsaosChickenII-2X3-0726-11684f5673c448e4902ede18abab2abd.jpg",
      "https://www.allrecipes.com/thmb/-5p5YVw8GkOnVZ7h2pH4sqmUKsc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8634868_Broccoli-Alfredo-Pasta_Brenda-Venable_4x3-0a4cdd1a4f4844a3b9749296e7165e06.jpg",
      "https://www.allrecipes.com/thmb/KrloOu0m1BdqtIXrZzFixYKa0cA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/8543745_Parmesan-Chicken-Meatballs_Bibi_1x1-ffdabc8cc8ea44f6a73db545f071fef2.jpg",
    ];
    return src;
  }
  function returnTitleDescribe() {
    let content = [
      [
        "Spicy Canned Salmon Salad Rice Bowl",
        "Dive into our Spicy Canned Salmon Salad Rice Bowl: zesty flavors, fresh greens, and perfectly cooked rice, topped with a bold, tangy dressing. Enjoy!",
      ],
      [
        "Savor our Filet-O-Fish Sandwich:",
        " Crisp, golden-breaded fish, topped with creamy tartar sauce and melty cheese, nestled between soft, toasted buns. Pure delight!",
      ],
      [
        "Indulge in Alfredo Pasta Brenda Venable:",
        "Rich, creamy sauce envelopes tender pasta, topped with savory herbs and Parmesan. A luxurious, comforting classic reimagined.",
      ],
      [
        "Enjoy Parmesan Chicken Meatballs Bibi: ",
        "Juicy, succulent chicken, enriched with Parmesan, herbs, and spices. Perfectly browned for a deliciously satisfying bite.",
      ],
      [
        "American Hamburger Size",
        " Feast on our massive American burger: Thick, juicy patty, fresh toppings, and gooey cheese packed in a soft, toasted bun. Unforgettably satisfying!",
      ],
      [
        "Chicken Thigh Curry: ",
        "Relish our Chicken Thigh Curry: Tender chicken thighs simmered in a rich, aromatic curry sauce. A hearty, flavorful dish with a spicy kick.",
      ],
    ];
    return content;
  }
  return { build: build };
})();
export { menu };
