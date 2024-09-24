// Нужно создать массив товаров и вывести его в DOM.
// Сделать так чтобы при нажатии на первый элемент он перечеркивался
//  уже другие элементы при нажатии не перечеркивались
let goods = ["bread", "water", "juise", "fruit"];
const showList = () => {
    let container=document.getElementById('container')
  goods.forEach((item,index) => {
    let div=document.createElement('div')
  div.innerHTML = `
       <p>${item}</p>`;
       container.appendChild(div)
       if(index===0){
        div.querySelector('p').addEventListener('click',()=>{
            div.querySelector('p').style='text-decoration:line-through'
        })
       }
  });
};
showList();

