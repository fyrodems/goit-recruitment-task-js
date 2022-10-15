const input = document.querySelector('.js-input');
const boxesContainer = document.querySelector('#boxes');
const controls = document.querySelector('#controls')

const getRandomValue = () => Math.ceil(Math.random() * 255);
const getRandomColor = () =>
  `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;


const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {

    const singleBox = document.createElement('div');
    singleBox.style = `
        background: ${getRandomColor()}; 
        width: ${30 + i * 10}px;
        height: ${30 + i * 10}px;
        margin: 10px auto;`
        boxesContainer.append(singleBox);
  }
};

const destroyBoxes = () => [...boxesContainer.children].forEach((elem) => elem.remove());

// eventListners
const handlerButton = (e) => {
  if (
    e.target.dataset.action === "create" &&
    boxesContainer.children.length === 0 &&
    input.valueAsNumber < 101
    ) {
        const amount = input.valueAsNumber;
        createBoxes(amount);
        input.value = "";
  } 
  else if (e.target.dataset.action === "destroy") {
    destroyBoxes();
    input.value = "";
  } 
};

if (controls) {
    controls.addEventListener("click", handlerButton);
}
