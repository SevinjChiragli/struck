// Нужно создать массив товаров и вывести его в DOM.
// Сделать так чтобы при нажатии на какой-то из элементов он перечеркивался
//  уже другие элементы при нажатии не перечеркивались
let goods = ["bread", "water", "juise", "fruit"];
let struck = false;
const showList = () => {
  let container = document.getElementById("container");
  goods.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
       <p>${item}</p>`;
    container.appendChild(div);
    div.addEventListener("click", () => {
      if (!struck) {
        div.style = "text-decoration: line-through";
        struck = true;
      }
    });
  });
};
showList();
