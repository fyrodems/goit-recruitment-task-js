class StringBuilder {
    constructor(baseString = "") {
      this.value = baseString;
    }
  };
  
  StringBuilder.prototype.append = function (str) {
    this.value = this.value + str;
    return this;
  };
  
  StringBuilder.prototype.prepend = function (str) {
    this.value = str + this.value;
    return this;
  };
  
  StringBuilder.prototype.pad = function (str) {
    this.value = str + this.value + str;
    return this;
  };

  const builder = new StringBuilder(".");
  builder.append("^").prepend("^").pad("=");

//add result to dom
const resultButton = document.querySelector('#result');

const addResultTodDOM = () => {
    const resultDiv = document.createElement('div');
    resultDiv.textContent = builder.value;
    resultDiv.style = "margin:30px 0; font-size: 24px;"
    document.querySelector('.main-container').appendChild(resultDiv);
}

if (resultButton) {
    console.log(builder);
    resultButton.addEventListener('click', addResultTodDOM)
}